import Head from "next/head";
import styles from '../../styles/ChefSingle.module.css'
import Image from "next/image";
import PageHead from "../../components/PageHead/PageHead";
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdMail, IoIosCall } from "react-icons/io";
import {BsBriefcaseFill} from 'react-icons/bs'
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import Reservation from "../../components/Reservation/Reservation";
import { Chefs } from "../../db/chefs";

const index = ({data}) => {

  return (
    <>
      <Head>
        <title>Chef | Restaurant</title>
        <meta name="description" content="restaurant chef page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`Chef Single - ${data[0].name}`} />
        <div className={styles.chef}>
          <div className={styles.left}>
            <Image src={data[0].photo} alt="chef" />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <h2>{data[0].name}</h2>
              <h3>{data[0].title}</h3>
              <p>{data[0].desc}</p>
            </div>
            <div className={styles.center}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <HiOutlineLocationMarker />
                </div>
                <div className={styles.info}>
                  <h3>Locate Us</h3>
                  <p>{data[0].location}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <BsBriefcaseFill />
                </div>
                <div className={styles.info}>
                  <h3>Experience</h3>
                  <p>{data[0].experience}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <IoMdMail />
                </div>
                <div className={styles.info}>
                  <h3>Mail</h3>
                  <p>{data[0].mail}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <IoIosCall />
                </div>
                <div className={styles.info}>
                  <h3>Contact Us</h3>
                  <p>{data[0].contact}</p>
                </div>
              </motion.div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.icons}>
                <span>
                  <BsInstagram />
                </span>
                <span>
                  <BsFacebook />
                </span>
                <span>
                  <BsTwitter />
                </span>
                <span>
                  <BsPinterest />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Reservation />
      </div>
    </>
  );
}

export default index

export async function getStaticPaths () {
  const paths = Chefs.map(item => {
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

export async function getStaticProps (context) {
  const {params} = context
  const data = Chefs.filter(item => item.id === Number(params.id))
  return {
    props: {
      data
    }
  }
}