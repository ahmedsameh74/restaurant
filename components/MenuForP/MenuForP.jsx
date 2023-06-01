import Image from 'next/image';
import Link from 'next/link';
import MenuItem from '../MenuItem/MenuItem';
import { motion } from 'framer-motion';
import { menu } from '../../db/Menu'
import styles from "../../styles/MenuForP.module.css";

import foods from "../../assets/foods.jpg";

const MenuForP = ({flex, index}) => {
  return (
    <div className={styles.menuPage} style={{flexDirection: flex}}>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideNav}
      >
        <div className={styles.photo}>
          <Image src={foods} alt="foods" />
        </div>
        {/* <Link href={"/our-menu"}>
          <a
            className="secondary-btn"
            style={{ width: "50%", fontSize: "19px" }}
          >
            See All Dishes
          </a>
        </Link> */}
      </motion.div>
      <div className={styles.menu}>
        <MenuItem name={menu[index].name} dishes={menu[index].dishes} style={styles.cat}/>
        <Link href={"/our-menu"} legacyBehavior>
          <a
            className="secondary-btn"
            style={{ width: "50%", fontSize: "19px" }}
          >
            Order now
          </a>
        </Link>
      </div>
    </div>
  );
}

export default MenuForP