import styles from '../../styles/Offers.module.css'
import burger from '../../assets/hampurger.png'
import pizza from '../../assets/pizza.png'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.top}>
        <div className={styles.title}>
          <h4>Offers</h4>
        </div>
        <div className={styles.header}>
          <h3>Our Offer Dishes</h3>
          <p>
            Our chefs create melt-in-your-mouth dishes that{"'"}ll satiate even
            the fussiest eaters now the dishes are in offers use it based on
            hunger.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.offer}>
          <div className={styles.offerDetails}>
            <div className={styles.offerPrice}>
              <p>only</p>
              <h3>$ 15</h3>
            </div>
            <div className={styles.offerDesc}>
              <p>50% OFFER GOING</p>
              <h2>Chicken Burger</h2>
              <p>Chicken burger with the tasty toppings and leaves.</p>
            </div>
          </div>
          <div className={styles.offerImg}>
            <Image src={burger} alt="burger" />
          </div>
        </div>
        <div className={styles.offerp}>
          <div className={styles.offerDetails}>
            <div className={styles.offerPrice}>
              <p>only</p>
              <h3>$ 15</h3>
            </div>
            <div className={styles.offerDesc}>
              <p>50% OFFER GOING</p>
              <h2>Chicken Pizza</h2>
              <p>Pizza with multiple flavor and the toping are mixed.</p>
            </div>
          </div>
          <div className={styles.offerImg}>
            <Image src={pizza} alt="pizza" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers