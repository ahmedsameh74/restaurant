import styles from "../../styles/Blogs.module.css";
// import PageHead from "../../components/PageHead/PageHead";
import Head from "next/head";
import { BlogCard } from "../../components/BlogSection/BlogSection";
// import SubHead from "../../components/SubHead/SubHead";
import Reservation from "../../components/Reservation/Reservation";
import { blogs } from "../../db/blogs";

const index = ({data, cat}) => {
  
  return (
    <>
      <Head>
        <title>Category | Restaurant</title>
        <meta name="description" content="restaurant Blogs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <PageHead title={`BLOGS`} /> */}
        <div className={styles.blog}>
          <div className={styles.cat}>
            category: <span className={styles.catSpan}>{cat}</span>
          </div>
          <div className={styles.blogs}>
            {data.map((item, index) => {
              return (
                <BlogCard
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  date={item.date}
                  desc={item.desc}
                  cat={item.cat}
                  href={item.id}
                />
              );
            })}
          </div>
        </div>
        <Reservation className="reserv" />
      </div>
    </>
  );
};

export default index;


export async function getStaticPaths() {
  const paths = blogs.map((item) => {
    return {
      params: {
        cat: `${item.cat}`,
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

  const data = blogs.filter((item) => item.cat === params.cat);
  return {
    props: {
      data,
      cat: params.cat
    },
  };
}