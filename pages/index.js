import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Testomintals from '../components/Testomintals/Testomintals'
import DivWithBack from '../components/DivWithBack/DivWithBack'
import Offers from '../components/Offers/Offers'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import BlogSection from '../components/BlogSection/BlogSection'
import Reservation from '../components/Reservation/Reservation'

export default function Home() {
  

  return (
    <div className="home">
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="restaurant ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        head={false}
        title="Welcome to Restaurant"
        body="The people, food and the prime locations make the perfect place good friends & family to come together and have great time."
        signature={false}
        button="View menu"
        animition="default"
        background="#292e36"
      />
      <About />
      <Menu />
      <Testomintals
        desc={
          "We love to hear from customers, so please leave a comment or say hello in an email."}
        align={"start"}
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
        enabled={{ clickable: true }}
        className={"swiper"}
        navigation={false}
      />
      <DivWithBack />
      <Offers />
      <Popular />
      <Offer />
      <BlogSection />
      <Reservation />
    </div>
  );
}
