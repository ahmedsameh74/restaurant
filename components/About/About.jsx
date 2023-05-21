import {HiOutlineLocationMarker} from 'react-icons/hi'
import {TbClockHour2} from 'react-icons/tb'
import {MdEditNote} from 'react-icons/md'
import styles from '../../styles/About.module.css'
import photo from "../../assets/restaurant.jpg";
import Kevin from "../../assets/Kevin.png";

import Image from 'next/image'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.top}>
            <div className={styles.item}>
                <div className={styles.icon}><HiOutlineLocationMarker/></div>
                <div className={styles.info}>
                    <h3>Locate Us</h3>
                    <p>Riverside 25, San Diego, California</p>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}><TbClockHour2/></div>
                <div className={styles.info}>
                    <h3>Open Hours</h3>
                    <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.icon}><MdEditNote/></div>
                <div className={styles.info}>
                    <h3>Reservation</h3>
                    <p>restaurantate@gmail.com</p>
                </div>
            </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.imgWrapper}>
                <Image src={photo} alt="photo" />
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h3>The Delicious Story</h3>
                    <p>The people, food and the prime locations make the perfect place  for the friends & family to come together and have great time.</p>
                </div>
                <div className={styles.innerContainer}>
                    <div className={styles.info}>
                    <h3>2018</h3>
                    <p>Plan for this restaurant to deliver healthy food.</p>
                </div>
                <div className={styles.info}>
                    <h3>2022</h3>
                    <p>Happily in the fourth year by fulfill the motto.</p>
                </div>
                <div className={styles.info}>
                    <h3>Kevin</h3>
                    <Image src={Kevin}/>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About