import Head from 'next/head';
import styles from '../../styles/Gallery.module.css'
import PageHead from '../../components/PageHead/PageHead';
import Image from 'next/image';
import food from '../../assets/foods.jpg'
import back from '../../assets/background.jpg'
import Link from 'next/link';
import SubHead from './../../components/SubHead/SubHead';
import { Food } from '../../db/Foods';

const index = () => {
  
  return (
    <>
      <Head>
        <title>Gallery | Restaurant</title>
        <meta name="description" content="restaurant Gallery page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"Gallery"} />
        <div className={styles.galleryContainer}>
          <div className={styles.gallery}>
            <div className={styles.left}>
              <div className={styles.top}>
                {/* <div className={styles.img}>
                  <Image src={food} alt="" />
                  <div className={styles.overlay}>
                    <h2>Food</h2>
                    <p>description</p>
                  </div>
                </div> */}
                {Food.slice(0, 2).map((item) => {
                  return (
                    <div className={styles.img} key={item.id}>
                      <Image src={item.photo} alt="" />
                      <Link
                        href={`/gallery-single/${item.id}`}
                        className={styles.overlay}
                      >
                        <h2>{item.name}</h2>
                        <p>{item.category[0]}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className={styles.bottom}>
                {Food && (
                  <div className={styles.img}>
                    <Image src={Food[2].photo} alt="" />
                    <Link
                      href={`/gallery-single/${Food[2].id}`}
                      className={styles.overlay}
                    >
                      <h2>{Food[2].name}</h2>
                      <p>{Food[2].category[0]}</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                {Food && (
                  <div className={styles.img}>
                    <Image src={Food[3].photo} alt="" />
                    <Link
                      className={styles.overlay}
                      href={`/gallery-single/${Food[3].id}`}
                    >
                      <h2>{Food[3].name}</h2>
                      <p>{Food[3].category[0]}</p>
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.bottom}>
                {Food.slice(4).map((item) => {
                  return (
                    <div className={styles.img} key={item.id}>
                      <Image src={item.photo} alt="" />
                      <Link
                        href={`/gallery-single/${item.id}`}
                        className={styles.overlay}
                      >
                        <h2>{item.name}</h2>
                        <p>{item.category[0]}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Link href={"/our-menu"} className="secondary-btn">
            See All Dishes
          </Link>
        </div>
        <div className={styles.background}>
          <SubHead
            title={"RESERVATION"}
            subTitle={"This Evening Will Be A Great Experience !!!"}
            desc={
              "We take reservations for lunch, dinner. To make a table reservation, please call us in between 10am-6pm, Monday to Friday"
            }
            align={"start"}
            color={"white"}
            // topWidth={"55%"}
          />
          <Link href={"/book-a-table"} className="secondary-btn">
            Book a Table
          </Link>
          <div className={styles.imgBack}>
            <Image src={back} alt="background" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.upper}>
            <div className={styles.content}>
              <SubHead
                title={"FEATURE"}
                subTitle={"TAlways Fresh & Healthy Ingredients"}
                desc={
                  "The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time."
                }
                align={"start"}
                color={"black"}
                // topWidth={"55%"}
              />
              <Link href={"/our-menu"} className="secondary-btn">
                View Menu
              </Link>
            </div>
            <div className={styles.image}>
              <Image src={food} alt="food" />
            </div>
          </div>
          <div className={styles.lower}>
            <div className={styles.image}>
              <Image src={food} alt="food" />
            </div>
            <div className={styles.contentl}>
              <SubHead
                title={"FEATURE"}
                subTitle={"We Invite You To Visit Our Restaurant"}
                desc={
                  "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
                }
                align={"start"}
                color={"black"}
                // topWidth={"55%"}
              />
              <Link href={"/our-menu"} className="secondary-btn">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index