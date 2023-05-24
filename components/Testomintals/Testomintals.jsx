import styles from '../../styles/Testomintals.module.css'
import profile from "../../assets/profile.jpg";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
} from "swiper";


import "swiper/css";
import "swiper/swiper-bundle.css";
import SubHead from '../SubHead/SubHead';

SwiperCore.use([Navigation, Pagination]);

const Testomintals = () => {
  
  return (
    <div className={styles.testo}>
      <SubHead
        title="TESTIMONIAL"
        subTitle="What Our Clients Say"
        desc="We love to hear from customers, so please leave a comment or say hello in an email."
        color="#fff"
        align="start"
        width="100%"
      />
      <div className={styles.bottom}>
        <Swiper
          spaceBetween={50}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className={styles.swiper}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideHeader}>
                <div className={styles.profile}>
                  <Image src={profile} alt="profile" />
                  <div className={styles.details}>
                    <h3>Y Ibrahim</h3>
                    <p>Egypt</p>
                  </div>
                </div>
              </div>
              <div className={styles.slideBody}>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideHeader}>
                <div className={styles.profile}>
                  <Image src={profile} alt="profile" />
                  <div className={styles.details}>
                    <h3>Y Ibrahim</h3>
                    <p>Egypt</p>
                  </div>
                </div>
              </div>
              <div className={styles.slideBody}>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideHeader}>
                <div className={styles.profile}>
                  <Image src={profile} alt="profile" />
                  <div className={styles.details}>
                    <h3>Y Ibrahim</h3>
                    <p>Egypt</p>
                  </div>
                </div>
              </div>
              <div className={styles.slideBody}>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideHeader}>
                <div className={styles.profile}>
                  <Image src={profile} alt="profile" />
                  <div className={styles.details}>
                    <h3>Y Ibrahim</h3>
                    <p>Egypt</p>
                  </div>
                </div>
              </div>
              <div className={styles.slideBody}>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.slideHeader}>
                <div className={styles.profile}>
                  <Image src={profile} alt="profile" />
                  <div className={styles.details}>
                    <h3>Y Ibrahim</h3>
                    <p>Egypt</p>
                  </div>
                </div>
              </div>
              <div className={styles.slideBody}>
                <p>
                  They known for its fabulous taste and food. Anywhere you go
                  your hunger is satisfied. The best chicken & burgers those are
                  yummy.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testomintals