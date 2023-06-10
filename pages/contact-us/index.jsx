import Head from 'next/head'
import styles from '../../styles/Contact.module.css'
import PageHead from '../../components/PageHead/PageHead'
import Reservation from '../../components/Reservation/Reservation';

const index = () => {
  return (
    <>
      <Head>
        <title>Contact us | Restaurant</title>
        <meta name="description" content="restaurant Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`Contact-Us`} />
      </div>

      
    </>
  );
}

export default index