import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Testomintals from '../components/Testomintals/Testomintals'
import DivWithBack from '../components/DivWithBack/DivWithBack'
import Offers from '../components/Offers/Offers'

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="restaurant ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Testomintals/>
      <DivWithBack/>
      <Offers/>
    </div>
  )
}
