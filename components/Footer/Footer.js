import styles from '../../styles/Footer.module.css'
import Logo from "../../assets/logo.svg";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        {/* <button className="secondary-btn">Call - 123 456 789</button> */}
        <p>#RestName</p>
        <Image src={Logo} alt="logo" />

        {/* <button className="main-btn">Reservation</button> */}
        <div className={styles.icons}>
          <a>
            <BsInstagram />
          </a>
          <a>
            <BsFacebook />
          </a>
          <a>
            <BsTwitter />
          </a>
          <a>
            <BsPinterest />
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.footCont}>
          <h3>CONTACT</h3>
          <div className={styles.details}>
            <p>5 Rue Dalou, 75015 Paris</p>
            <p>+201094743313</p>
            <p>rest@rest.com</p>
          </div>
        </div>
        <div className={styles.footCont}>
          <p>Join our mailing list for updates, Get news & offers events.</p>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.btn}>Subscribe</button>
          </div>
        </div>
        <div className={styles.footCont}>
          <h3>WORKING HOURS</h3>
          <div className={styles.details}>
            <p>Mon – Fri: 7.00am – 6.00pm</p>
            <p>Mon – Fri: 7.00am – 6.00pm</p>
            <p>Mon – Fri: 7.00am – 6.00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer