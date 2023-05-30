import styles from '../../styles/Hero.module.css'
import photo from '../../assets/pexels-photo-914388.jpg'
import setting from '../../assets/vectors/setting.svg'
import settingGold from '../../assets/vectors/settingGold.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Kevin from "../../assets/Kevin.png";


const Hero = ({ head, title, body, signature, button, animition, background }) => {
  return (
    <div className={styles.hero} style={{ background }}>
      <div className={styles.left}>
        {head && (
          <h3
            className={styles.mainTitle}
            style={{ color: background === "white" && "black" }}
          >
            About Us
          </h3>
        )}
        <h2
          style={{
            color: background === "white" && "black",
            fontSize: head && "60px",
          }}
        >
          {title}
        </h2>
        <p style={{ color: background === "white" && "black" }}>{body}</p>
        {signature && (
          <div className={styles.info}>
            <h3>Kevin</h3>
            <Image src={Kevin} alt="signature" />
          </div>
        )}
        <Link href={"/our-menu"} legacyBehavior>
          <a className="secondary-btn">{button}</a>
        </Link>
      </div>
      <div className={styles.right} style={{justifyContent: head && 'center'}}>
        <div
          className={
            head ? styles.anotherStyleForImgWrapper : styles.imgWrapper
          }
        >
          <Image src={photo} alt="photo" />
        </div>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className={styles.setting}
        >
          <Image
            src={animition === "default" ? setting : settingGold}
            alt="photo"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero