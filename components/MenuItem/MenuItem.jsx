import Image from "next/image";
import styles from "../../styles/Menu.module.css";
import foods from "../../assets/foods.jpg";

const MenuItem = ({name, dishes}) => {
  return (
    <div className={styles.cat}>
      <h4>{name}</h4>
      {dishes.map(dish => {
        return (
          <div className={styles.dish} key={dish.name}>
            <Image src={foods} alt="dish" />
            <div className={styles.menuItemDetails}>
              <div className={styles.details}>
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
              </div>
              <div className={styles.dots}></div>
              <div className={styles.price}>{dish.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
