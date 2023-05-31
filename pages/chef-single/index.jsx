import Head from "next/head";
import styles from '../../styles/ChefSingle.module.css'
import Image from "next/image";
import food from '../../assets/chef.jpg'
import PageHead from "../../components/PageHead/PageHead";
import { MdEditNote } from "react-icons/md";
import { motion } from 'framer-motion';
import { TbClockHour2 } from "react-icons/tb";
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

const index = () => {
  return (
    <>
      <Head>
        <title>Chef | Restaurant</title>
        <meta name="description" content="restaurant chef page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"Chef Single"} />
        <div className={styles.chef}>
          <div className={styles.left}>
            <Image src={food} alt="chef" />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <h2>Evan Matthew</h2>
              <h3>Master Chef</h3>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divid with
                additional clickthroughs from Nanotechnology immersion along the
                information highway will close the loop on focusing solely the
                bottom line.
              </p>
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
                  <p>Riverside 25, San Diego, California</p>
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
                  <p>2 years of experience</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                //   animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <IoMdMail />
                </div>
                <div className={styles.info}>
                  <h3>Mail</h3>
                  <p>restaurantate@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                //   animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={styles.item}
              >
                <div className={styles.icon}>
                  <IoIosCall />
                </div>
                <div className={styles.info}>
                  <h3>Contact Us</h3>
                  <p>800-234-567</p>
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
        <Reservation/>
      </div>
    </>
  );
}

export default index