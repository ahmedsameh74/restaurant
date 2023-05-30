import styles from '../../styles/Hero.module.css'
import photo from '../../assets/pexels-photo-914388.jpg'
import setting from '../../assets/vectors/setting.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h2>Welcome to Restaurant</h2>
        <p>
          The people, food and the prime locations make the perfect place good
          friends & family to come together and have great time.
        </p>
        <Link href={'/our-menu'} legacyBehavior>
          <a className="secondary-btn">View Menu</a>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.imgWrapper}>
          <Image src={photo} alt="photo" />
        </div>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className={styles.setting}
        >
          <Image src={setting} alt="photo" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero