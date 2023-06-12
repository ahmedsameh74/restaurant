import Image from "next/image";
import { blogs } from "../../db/blogs";
import styles from '../../styles/Blog.module.css'
import Head from "next/head";
import Link from "next/link";

const index = ({data}) => {
  return (
    <>
      <Head>
        <title>{data[0].title} | Restaurant</title>
        <meta name="description" content="restaurant Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.blogContent}>
        <div className={styles.top}>
          <div className={styles.titles}>
            <Link href={`/category/${data[0].cat}`} className={styles.title}>{data[0].cat}</Link>
            <p className={styles.title}>{data[0].date}</p>
          </div>
          <h1>{data[0].title}</h1>
          <p className={styles.desc}>{data[0].desc}</p>
          <div className={styles.img}>
            <Image src={data[0].img} alt={data[0].title} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data[0].body }}
          />
        </div>
      </div>
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const paths = blogs.map((item) => {
    return {
      params: {
        id: `${item.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = blogs.filter((item) => item.id === Number(params.id));
  return {
    props: {
      data,
    },
  };
}
