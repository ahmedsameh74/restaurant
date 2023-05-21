import styles from "../../styles/Menu.module.css";
import foods from "../../assets/foods.jpg";

import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.title}>
        <h4>MENU</h4>
      </div>
      <div className={styles.header}>
        <h3>Try Our Special Dishes</h3>
        <p>
          Every time you perfectly dine with us, it should happy for great
          inspired food in an environment designed with individual touches
          unique to the local area.
        </p>
      </div>
      <div className={styles.photo}>
        <Image src={foods} alt="foods" />
      </div>
    </div>
  );
};

export default Menu;
