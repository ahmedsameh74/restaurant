import styles from '../../styles/Header.module.css'
import Logo from '../../assets/logo.svg'
import ArrowDown from '../../assets/icons/down-arrow.svg'
// import {BsFacebook, BsTwitter, BsInstagram, BsPinterest} from 'react-icons/bs';
import {ImMenu} from 'react-icons/im';
import {GrClose} from 'react-icons/gr';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

import Image from 'next/image';
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const variants = {
  open: { opacity: 1,
    //  y: 0,
    //   scaleY: 1,
       height: 'auto',
      },
  closed: { 
    opacity: 0,
    //  scaleY: 0,
    //  y: 0,
      height: 0,
    },
}

const Header = () => {
  const navItems = [
    {name: 'Home', path: '/', id: 1, isActive: true},
    {name: 'About Us', path: '/about', id: 2, isActive: false},
    {name: 'Our Menu', path: '/our-menu', id: 3, isActive: false},
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

  const [active, setActive] = useState(false)
  const ref = useRef(null);

  const closeOpenMenus = useCallback(
    (e) => {
      if (ref.current && active && !ref.current.contains(e.target)) {
        setActive(false);
      }
    },
    [active]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [active]);

  
  return (
    <motion.div
      className={styles.head}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.top}>
        <button className="secondary-btn">Call - 123 456 789</button>
        <Image src={Logo} alt="logo" />

        <button className="main-btn">Reservation</button>
      </div>
      <div className={styles.center}>
        <div className={styles.navItems}>
          {navItems.map((item) => {
            if (item.name === "Pages") {
              return (
                <div
                  key={item.id}
                  className={styles.navItem}
                  // initial={{ opacity: 0, scale: 0.5 }}
                  // animate={{ opacity: 1, scale: 1 }}
                  // transition={{ duration: 0.5 }}
                >
                  <p>
                    {item.name}
                    <Image src={ArrowDown} alt="arrow" width={20} height={20} />
                  </p>
                  <div>
                    {nestedNavItems.map((item) => {
                      return (
                        <Link key={item.id} href={item.path} legacyBehavior>
                          {/* <a> */}
                            {item.name}
                          {/* </a> */}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <Link key={item.id} href={item.path} legacyBehavior>
                  <a>
                  {item.name}
                  </a>
                </Link>
              );
            }
          })}
        </div>
        {!active ? (
          <div className={styles.burger} onClick={() => setActive(true)}>
            <ImMenu />
          </div>
        ) : (
          <div className={styles.burger} onClick={() => setActive(false)}>
            <GrClose />
          </div>
        )}
        <div className={styles.icons}>
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsFacebook />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <BsPinterest />
          </span>
        </div>
      </div>

      <motion.div
        className={styles.mobMenu}
        animate={active ? "open" : "closed"}
        variants={variants}
        initial="closed"
        exit="collapsed"
        ref={ref}
        // style={{ display: active ? "flex" : "none" }}
      >
        {navItems.map((item) => {
          if (item.name === "Pages") {
            return (
              <div key={item.id} className={styles.mobNavItem}>
                <p>
                  {item.name}
                  <Image src={ArrowDown} alt="arrow" width={20} height={20} />
                </p>
                <div>
                  {nestedNavItems.map((item) => {
                    return (
                      <Link key={item.id} href={item.path} legacyBehavior>
                      {/* <a> */}
                        {item.name}
                      {/* </a> */}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <Link key={item.id} href={item.path} legacyBehavior>
                {/* <a> */}
                {item.name}
                {/* </a> */}
              </Link>
            );
          }
        })}
      </motion.div>
    </motion.div>
  );
}

export default Header