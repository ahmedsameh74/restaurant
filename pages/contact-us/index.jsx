import Head from 'next/head'
import styles from '../../styles/Contact.module.css'
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdMail, IoIosCall } from "react-icons/io";
import PageHead from '../../components/PageHead/PageHead'
import SubHead from './../../components/SubHead/SubHead';
import food from '../../assets/fooood.jpeg'
import Image from 'next/image';

const index = () => {
  return (
    <>
      <Head>
        <title>Contact us | Restaurant</title>
        <meta name="description" content="restaurant Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`Contact-Us`} />
        <div className={styles.body}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.header}>
                <h2>Contact Information</h2>
                <p>
                  We love hearing from customers, visitors and people from the
                  Restaurantate. We really appreciate you taking the time to get
                  in touch. Please fill in the form below.
                </p>
              </div>
              <div className={styles.paras}>
                <div className={styles.para}>
                  <div className={styles.svg}>
                    <HiOutlineLocationMarker />
                  </div>
                  <p>Riverside 25, San Francisco, California</p>
                </div>
                <div className={styles.para}>
                  <div className={styles.svg}>
                    <IoMdMail />
                  </div>
                  <p>emailforTest@email.com</p>
                </div>
                <div className={styles.para}>
                  <div className={styles.svg}>
                    <IoIosCall />
                  </div>
                  <p>(+20) 194943333</p>
                </div>
              </div>
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <BsFacebook />
                </div>
                <div className={styles.icon}>
                  <BsInstagram />
                </div>
                <div className={styles.icon}>
                  <BsPinterest />
                </div>
                <div className={styles.icon}>
                  <BsTwitter />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <SubHead
                align={"start"}
                color={"black"}
                subTitle={"Have A Question?"}
                title={"Mail us"}
              />
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Timing" />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="secondary-btn">Submit Now</button>
            </div>
          </div>
          <div className={styles.bottom}>
            <SubHead
              title={"VISIT US!"}
              color={"black"}
              align={"center"}
              subTitle={"Our branches"}
            />
            <div className={styles.bodybott}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h2>Los Angeles, CA</h2>
                  <p className={styles.p}>
                    Riverside 25, Los Angeles, United States.
                  </p>
                  <div className={styles.tail}>
                    <div className={styles.parag}>
                      <div className={styles.iconn}>
                        <IoMdMail />
                      </div>
                      <p>emailforTest@email.com</p>
                    </div>
                    <div className={styles.parag}>
                      <div className={styles.iconn}>
                        <IoIosCall />
                      </div>
                      <p>(+20) 194943333</p>
                    </div>
                  </div>
                </div>
                <div className={styles.img}>
                  <Image src={food} alt="food" />
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h2>Los Angeles, CA</h2>
                  <p className={styles.p}>
                    Riverside 25, Los Angeles, United States.
                  </p>
                  <div className={styles.tail}>
                    <div className={styles.parag}>
                      <div className={styles.iconn}>
                        <IoMdMail />
                      </div>
                      <p>emailforTest@email.com</p>
                    </div>
                    <div className={styles.parag}>
                      <div className={styles.iconn}>
                        <IoIosCall />
                      </div>
                      <p>(+20) 194943333</p>
                    </div>
                  </div>
                </div>
                <div className={styles.img}>
                  <Image src={food} alt="food" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index