import Image from 'next/image';
import menu from '../../assets/icons/foodMenu.svg'
import deliver from '../../assets/icons/deliver.svg'
import calender from "../../assets/icons/calender.svg";
import styles from '../../styles/Offer.module.css'
import SubHead from './../SubHead/SubHead';

const Offer = () => {
  return (
    <div className={styles.offer}>
      <div className={styles.offerWrapper}>
        <SubHead
          title="WHAT WE OFFER"
          subTitle="Our Great Services"
          desc="The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests."
          color="#fff"
          align="start"
          width="100%"
        />
        <div className={styles.offerContainer}>
          <div className={styles.offerBox}>
            <Image src={calender} alt="calender" />
            <h3>Opened 24/7</h3>
          </div>
          <div className={styles.offerBox}>
            <Image src={menu} alt="menu" />
            <h3>Special Menus</h3>
          </div>
          <div className={styles.offerBox}>
            <Image src={deliver} alt="deliver" />
            <h3>Home Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer