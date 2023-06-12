import styles from '../../styles/Blogs.module.css'
import PageHead from '../../components/PageHead/PageHead'
import Head from 'next/head'
import { BlogCard } from '../../components/BlogSection/BlogSection'
import SubHead from '../../components/SubHead/SubHead'
import Reservation from '../../components/Reservation/Reservation'
import {blogs} from '../../db/blogs'


const index = () => {
  console.log(blogs)
  return (
    <>
      <Head>
        <title>BLOGS | Restaurant</title>
        <meta name="description" content="restaurant Blogs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`BLOGS`} />
        <div className={styles.blog}>
          <SubHead
            width={"95%"}
            align={"center"}
            color={"black"}
            title={"Blog"}
            subTitle={"Be First Who Read News"}
            desc={
              "Explore the latest stories about our dishes, offers, events and future plans here."
            }
          />
          <div className={styles.blogs}>
            {blogs.map((item, index) => {
              return <BlogCard key={item.id} title={item.title} img={item.img} date={item.date} desc={item.desc} cat={item.cat} href={item.id}/>;
            })}
          </div>
        </div>
        <Reservation className="reserv" />
      </div>
    </>
  );
}

export default index