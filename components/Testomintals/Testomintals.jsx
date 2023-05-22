import styles from '../../styles/Testomintals.module.css'
import profile from "../../assets/profile.jpg";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";


import "swiper/css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Testomintals = () => {
  return (
    <div className={styles.testo}>
      <div className={styles.top}>
        <div className={styles.title}>
          <h4>TESTIMONIAL</h4>
        </div>
        <div className={styles.header}>
          <h3>Our Clients Say</h3>
          <p>
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Pagination, EffectFade]}
          pagination={{ clickable: true }}
          className={styles.swiper}
          effect=''
          slidesPerView={3}
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
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
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
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
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
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
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
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
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
                    <p>They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy. </p>
                </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Testomintals