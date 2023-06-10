import Head from "next/head";
import PageHead from "../../components/PageHead/PageHead";
import styles from '../../styles/GallerySingle.module.css'
import Image from "next/image";
import Link from "next/link";
import Reservation from "../../components/Reservation/Reservation";
import { Food } from "../../db/Foods";

const index = ({data}) => {

  return (
    <>
      <Head>
        <title>Gallery | Restaurant</title>
        <meta name="description" content="restaurant Gallery page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`Gallery single - ${data[0].name}`} />
        <div className={styles.gallery}>
          <div className={styles.container}>
            <div className={styles.left}>
              <Image src={data[0].photo} alt="food" />
            </div>
            <div className={styles.right}>
              <h2>{data[0].name}</h2>
              <p className={styles.desc}>{data[0].desc}</p>
              <p>
                <span>CATEGORY:</span>{" "}
                {data[0].category.map((item) => `${item}`)}
              </p>
              <p>
                <span>DATE:</span> {data[0].date}
              </p>
              <p>
                <span>TAGS:</span> {data[0].tags.map((item) => `${item}`).join(', ')}
              </p>
              <Link href={`/recipe/${data[0].id}`} className="secondary-btn">
                See Reciepe
              </Link>
            </div>
          </div>
          <Link href={"/gallery"} className="secondary-btn">
            See More
          </Link>
        </div>
        <Reservation className="reserv" />
      </div>
    </>
  );
}

export default index



export async function getStaticPaths() {
  const paths = Food.map(item => {
    return {
      params: {
        id: `${item.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;

  const data = Food.filter(item => item.id === Number(params.id) )
  return {
    props: {
      data
    }
  };
}