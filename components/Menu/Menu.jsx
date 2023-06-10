import styles from "../../styles/Menu.module.css";
import foods from "../../assets/foods.jpg";

import Image from "next/image";
import MenuItem from "../MenuItem/MenuItem";
import { motion } from "framer-motion";
import SubHead from "../SubHead/SubHead";
import Link from "next/link";
import { menu } from "../../db/Menu";



const Menu = () => {
  


  return (
    <div className={styles.menuPage}>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideNav}
      >
        <SubHead
          title="MENU"
          subTitle="Try Our Special Dishes"
          desc="Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
          color="#000"
          align="start"
          width="100%"
        />
        <div className={styles.photo}>
          <Image src={foods} alt="foods" />
        </div>
        <Link href={'/our-menu'} legacyBehavior>
          <a
            className="secondary-btn"
            style={{ width: "50%", fontSize: "19px" }}
          >
            See All Dishes
          </a>
        </Link>
      </motion.div>
      <div className={styles.menu}>
        {menu.map((item) => {
          return (
            <MenuItem key={item.id} name={item.name} dishes={item.dishes} />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
