import Head from "next/head";
import PageHead from "../../components/PageHead/PageHead";
import Hero from "../../components/Hero/Hero";
import Reservation from "../../components/Reservation/Reservation";
import styles from "../../styles/AboutPage.module.css";
import chiefHat from "../../assets/icons/chief-hat.svg";
import healtheShake from "../../assets/icons/healthy-shakes.svg";
import dinner from "../../assets/icons/pot-dinner.svg";
import vegan from "../../assets/icons/vegan.svg";
import chef from "../../assets/chef.jpg";
import Image from "next/image";
import Link from "next/link";
import SubHead from "../../components/SubHead/SubHead";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const aboutItems = [
  {
    img: dinner,
    id: 0,
    title: "Fresh Product",
    body: "Our food products are fully fresh and reasy to eat.",
  },
  {
    img: chiefHat,
    id: 1,
    title: "Skilled Chefs",
    body: "The team full of talented and a qualified pantry chefs.",
  },
  {
    img: healtheShake,
    id: 2,
    title: "Drinks & Juices",
    body: "Fresh and non packages juices and drinks are avilable.",
  },
  {
    img: vegan,
    id: 3,
    title: "Vegan Cuisine",
    body: "We're in the mind of satisfies the vegan people starving.",
  },
];

const about = () => {
  return (
    <>
      <Head>
        <title>about | Restaurant</title>
        <meta name="description" content="restaurant about us content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"About Us"} />
        <Hero
          head={true}
          title="Quality And  Tradition"
          body="The people, food and the prime locations make the perfect place good friends & family to come together and have great time. Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
          signature={true}
          button="See Our Masters"
          animition="gold"
          background="white"
        />
        <div className={styles.banner}>
          {aboutItems.map((item, index) => {
            return (
              <div
                className={`${styles.about} ${
                  index === aboutItems.length - 1 && styles.lastAbout
                }`}
                key={item.id}
              >
                <Image src={item.img} alt="hat" />
                <h4>{item.title}</h4>
                <p>{item.body}</p>
                <Link href={"/our-menu"}>See more</Link>
              </div>
            );
          })}
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.chiefs}>
          <SubHead
            align={"center"}
            color={"black"}
            title={"BEST CHEFS"}
            subTitle={"Meet Our Professional Chefs"}
            width={"100%"}
          />
          <div className={styles.chefs}>
            {Array.from("ahme").map((item) => {
              return (<div className={styles.singleChef} key={item}>
                <div className={styles.img}>
                  <Image src={chef} alt="chef" />
                  <div className={styles.chefSocial}>
                    <BsFacebook />
                    <BsInstagram />
                    <BsPinterest />
                    <BsTwitter />
                  </div>
                </div>
                <h3>Avroko</h3>
                <p>Master Chef</p>
              </div>)
            })}
          </div>
        </div>
        <Reservation />
      </div>
    </>
  );
};

export default about;