import Layout from "../Layout/Layout";
import SubHead from "../SubHead/SubHead";
import Image from "next/image";
import styles from "../../styles/BlogSection.module.css";
import Link from "next/link";
import { blogs } from "../../db/blogs";

export const BlogCard = ({title, desc, img, cat, date, href}) => {
  return (
      <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image src={img} alt="foods" />
                <div className={styles.btnOverlay}>
                    <Link href={`/blog/${href}`} className="secondary-btn">View More</Link>
                </div>
              </div>
              <div className={styles.cardDesc}>
                <div className={styles.cardInfo}>
                  <Link href={`/category/${cat}`} className={styles.cardTitle}>{cat}</Link>
                  <p className={styles.cardTitle}>{date}</p>
                </div>
                <h3>{title}</h3>
                <p className={styles.cardPara}>
                  {desc}
                </p>
              </div>
            </div>
  )
}

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
        {blogs.splice(0, 2).map((item, index) => {
          return (
            <BlogCard
              key={item.id}
              title={item.title}
              img={item.img}
              date={item.date}
              desc={item.desc}
              cat={item.cat}
              href={item.id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogSection;
