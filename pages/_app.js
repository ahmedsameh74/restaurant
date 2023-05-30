import { useRouter } from 'next/router';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import '../styles/globals.css'
import '../styles/swiper.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.pathname);

  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
