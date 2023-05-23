import styles from '../../styles/Popular.module.css'
import Image from "next/image";
import foods from "../../assets/foods.jpg";
import Layout from '../Layout/Layout';
import SubHead from '../SubHead/SubHead';

const Popular = () => {
  return (
    <Layout>
        <SubHead
        title={"MENU"}
        subTitle={"Popular Dishes"}
        desc={
          "There is a game between the waiters in restaurant to see who serves the food to each table fastest. That led to attempting the Guinness Record."
        }
        color={"#555"}
        align={"center"}
        width={"70%"}
      />
      <div className={styles.bottom}>
        {Array.from('ahme').map((item, index) => {
            return (
              <div className={styles.dish} key={index}>
                <div className={styles.dishImg}>
                  <Image src={foods} alt="foods" />
                  <div className={styles.title}>
                    <h3>Apple Pie with Cream</h3>
                    <p>$ 15</p>
                  </div>
                </div>
                <div className={styles.dishDesc}>
                  <p>
                    Dish relished by all age groups as a starter dish at
                    parties.
                  </p>
                </div>
              </div>
            );
        })}
      </div>
      <div>
        <button className='secondary-btn' style={{fontSize: '20px'}}>See All Dishes</button>
      </div>
    </Layout>
  );
}

export default Popular