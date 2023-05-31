import Head from "next/head";
import PageHead from "../../components/PageHead/PageHead";
import { Chefs } from "../about";
import Testomintals from "../../components/Testomintals/Testomintals";
import Reservation from "../../components/Reservation/Reservation";
import styles from '../../styles/OurChefs.module.css'
import SubHead from "../../components/SubHead/SubHead";
import Image from "next/image";
import food from '../../assets/chef.jpg'
import { motion } from "framer-motion";
import Link from "next/link";

const index = () => {
    const bars = [
      { name: "Experienced", to: "75%", id: 0 },
      { name: "Professionalism", to: '90%',id: 1 },
      { name: "Creative", to: "60%", id: 2 },
    ];


  return (
    <>
      <Head>
        <title>Our Chefs | Restaurant</title>
        <meta name="description" content="restaurant our chefs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <PageHead title={"Our Chefs"} />
        <Chefs cols={"repeat(3, 1fr)"} arr={"yasmine"} imgWidth={"90%"} />
        <Testomintals
          align={"center"}
          topWidth={"100%"}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          navigation={true}
          enabled={false}
          className={"horSwiper"}
        />
        <div className={styles.chefExperience}>
          <div className={styles.left}>
            <SubHead
              align={"start"}
              color={"black"}
              title={"BEST CHEFS"}
              subTitle={"Only Skilled Team"}
              desc={
                "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
              }
            />
            <div className={styles.bars}>
              {bars.map((item) => {
                return (
                  <div className={styles.barContainer} key={item.id}>
                    <h3>{item.name}</h3>
                    <div className={styles.bar}>
                      <motion.div
                        className={styles.progress}
                        initial={{
                          //   opacity: 0,
                          //  scale: 0.5,
                          width: "0",
                          // translateX: 0
                        }}
                        whileInView={{
                          //   opacity: 1,
                          //  scale: 1,
                          width: item.to,
                          // translateX: '80%'
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                      ></motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link href={"/our-menu"} className="secondary-btn" style={{width: '30%', fontSize: '20px', display: 'block', marginTop: '20px'}}>
              See All Dishes
            </Link>
          </div>
          <div className={styles.right}>
            <Image src={food} alt="chef" />
          </div>
        </div>
        <Reservation />
      </div>
    </>
  );
};

export default index;
