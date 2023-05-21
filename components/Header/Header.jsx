import styles from '../../styles/Header.module.css'
import Logo from '../../assets/logo.svg'
import ArrowDown from '../../assets/icons/down-arrow.svg'
import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';

import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {
  const navItems = [
    {name: 'Home', path: '/', id: 1, isActive: true},
    {name: 'About Us', path: '/about', id: 2, isActive: false},
    {name: 'Our Menu', path: '/menu', id: 3, isActive: false},
    {name: 'Pages', path: '/', id: 4, isActive: false},
    {name: 'Blog', path: '/blog', id: 5, isActive: false},
    {name: 'Contact Us', path: '/contact', id: 6, isActive: false}
  ]

  const nestedNavItems = [
    {name: 'Book a table', id: 1, path: '/reservation'},
    {name: 'Our Chefs', id: 2, path: '/chefs'},
    {name: 'Chef Single', id: 3, path: '/chef'},
    {name: 'Recipe', id: 4, path: '/recipe'},
    {name: 'Gallery', id: 5, path: '/gallery'},
    {name: 'Gallery Single', id: 6, path: '/gallery-single'},
    {name: 'FAQ', id: 7, path: '/faq'}
  ]
  
  return (
    <motion.div 
    className={styles.head}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
        <div className={styles.top}>
        <button className='secondary-btn'>Call - 123 456 789</button>
            <Image src={Logo} alt="logo"/>

          <button className="main-btn">Reservation</button>
        </div>
        <div className={styles.center}>
          <div className={styles.navItems}>
            {navItems.map(item => {
              if(item.name === 'Pages') {
                return (
                  <div
                    key={item.id}
                    className={styles.navItem}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>
                      {item.name}
                      <Image
                        src={ArrowDown}
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </p>
                    <div>
                      {nestedNavItems.map((item) => {
                        return (
                          <a key={item.id} href={item.path}>
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }else {
                return(
                  <a key={item.id} href={item.path}>{item.name}</a>
                )
              }
            })}

          </div>
          <div className={styles.icons}>
          <a><BsInstagram/></a>
          <a><BsFacebook/></a>
          <a><BsTwitter/></a>
          <a><BsPinterest/></a>
          </div>
        </div>
    </motion.div>
  )
}

export default Header