import Layout from "../Layout/Layout";
import SubHead from "../SubHead/SubHead";
import foods from "../../assets/foood.jpg";
import fooods from "../../assets/fooood.jpeg";
import Image from "next/image";
import styles from "../../styles/BlogSection.module.css";

const BlogSection = () => {
  return (
    <Layout>
      <SubHead
        title={"BLOG"}
        subTitle={"Be First Who Read News"}
        desc={
          "Explore the latest stories about our dishes, offers, events and future plans here."
        }
        color={"#555"}
        align={"center"}
        width={"70%"}
      />
      <div className={styles.bottom}>
        {Array.from("ah").map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.cardImg}>
                <Image src={foods} alt="foods" />
                <div className={styles.btnOverlay}>
                    <button className="secondary-btn">View More</button>
                </div>
              </div>
              <div className={styles.cardDesc}>
                <div className={styles.cardInfo}>
                  <p className={styles.cardTitle}>DELICIOUS</p>
                  <p className={styles.cardTitle}>MARCH 19, 2022</p>
                </div>
                <h3>The Legend Of US Cuisine: The Story Of Hungry People</h3>
                <p className={styles.cardPara}>
                  Capitalize on low-hanging fruit to identify a ballpark value
                  added matrix economically and the creative activity to beta
                  test override the food quality.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogSection;
