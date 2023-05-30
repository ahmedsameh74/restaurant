import PageHead from '../../components/PageHead/PageHead'
import Head from 'next/head'
import MenuForP from '../../components/MenuForP/MenuForP'
import back from '../../assets/background.jpg'
import Image from 'next/image'
import styles from '../../styles/OurMenu.module.css'
import Reservation from '../../components/Reservation/Reservation'

const ourMenu = () => {
  return (
    <>
      <Head>
        <title>our-menu | Restaurant</title>
        <meta name="description" content="restaurant menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"our menu"} />
        <MenuForP flex="row" index={0} />
        <div className={styles.back}>
          <Image src={back} alt="background" />
        </div>
        <MenuForP flex="row-reverse" index={1} />
        <div className={styles.back}>
          <Image src={back} alt="background" />
        </div>
        <MenuForP flex="row" index={2} />
        <Reservation />
      </div>
    </>
  );
}

export default ourMenu