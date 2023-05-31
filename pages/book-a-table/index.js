import Image from "next/image";
import PageHead from "../../components/PageHead/PageHead"
import SubHead from "../../components/SubHead/SubHead";
import styles from '../../styles/BookATable.module.css'
import foods from '../../assets/foods.jpg'
import { IoMdPizza } from "react-icons/io";
import {CiTimer} from 'react-icons/ci'
import {TbTruckDelivery} from 'react-icons/tb'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import Head from "next/head";


const index = () => {
    const container = [
      { name: "Fresh Foods", id: 0, svg: () => <IoMdPizza /> },
      { name: "Fast Delivery", id: 1, svg: () => <TbTruckDelivery /> },
      { name: "Quality Interior", id: 2, svg: () => <AiOutlineCheckCircle /> },
      { name: "24/7 Service", id: 3, svg: () => <CiTimer /> },
    ];
  return (
    <>
      <Head>
        <title>Book A Table | Restaurant</title>
        <meta name="description" content="restaurant Reservation page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"Book A Table"} />
        <div className={styles.reserev}>
          <div className={styles.left}>
            <SubHead
              width={"95%"}
              align={"start"}
              color={"black"}
              title={"RESERVATION"}
              desc={
                "Take a look at Restaurantate fabulous menu. And then use our online booking system to book a table instantly!"
              }
              subTitle={"Book Your Table Now"}
            />
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Date" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Timing" />
                <input type="text" placeholder="Persons" />
              </div>
              <button
                className="secondary-btn"
                style={{ width: "30%", fontSize: "20px" }}
              >
                Book A Table
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <Image src={foods} alt="" />
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.right}>
            <Image src={foods} alt="" />
          </div>
          <div className={styles.left}>
            <SubHead
              width={"95%"}
              align={"start"}
              color={"black"}
              title={"WHY CHOOSE US"}
              desc={
                "Take a look at Restaurantate fabulous menu. And then use our online booking system to book a table instantly!The people, food and the prime locations make Restaurantate the perfect place good friends & family to come together and have great time. Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
              }
              subTitle={"Why We Are The Best?"}
            />
            <div className={styles.icons}>
                {container.map(item => {
                    return (
                      <div className={styles.icon} key={item.id}>
                        <item.svg/>
                        <span>{item.name}</span>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index