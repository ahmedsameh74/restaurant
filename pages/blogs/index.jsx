import styles from '../../styles/Blogs.module.css'
import PageHead from '../../components/PageHead/PageHead'
import Head from 'next/head'
import { BlogCard } from '../../components/BlogSection/BlogSection'
import SubHead from '../../components/SubHead/SubHead'


const index = () => {
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
            desc={'Explore the latest stories about our dishes, offers, events and future plans here.'}
          />
          <div className={styles.blogs}>
            {Array.from("yass").map((item, index) => {
              return <BlogCard key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default index