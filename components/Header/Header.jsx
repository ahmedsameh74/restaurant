import styles from '../../styles/Header.module.css'
import Logo from '../../assets/logoll.svg'
import ArrowDown from '../../assets/icons/down-arrow.svg'
import { AiOutlineMenu } from "react-icons/ai";
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
import { useRouter } from 'next/router';

const variants = {
  open: { opacity: 1,
       height: 'auto',
      },
  closed: { 
    opacity: 0,
      height: 0,
    },
}

const Header = () => {
  const navItems = [
    { name: "Home", path: "/", id: 1, isActive: true, prefetch: true },
    {
      name: "About Us",
      path: "/about",
      id: 2,
      isActive: false,
      prefetch: false,
    },
    {
      name: "Our Menu",
      path: "/our-menu",
      id: 3,
      isActive: false,
      prefetch: false,
    },
    { name: "Pages", path: "/", id: 4, isActive: false, prefetch: false },
    { name: "Blog", path: "/blogs", id: 5, isActive: false, prefetch: false },
    {
      name: "Contact Us",
      path: "/contact-us",
      id: 6,
      isActive: false,
      prefetch: false,
    },
  ];

  const nestedNavItems = [
    { name: "Book a table", id: 1, path: "/book-a-table", prefetch: false },
    { name: "Our Chefs", id: 2, path: "/our-chefs", prefetch: false },
    { name: "Gallery", id: 5, path: "/gallery", prefetch: false },
    { name: "FAQ", id: 7, path: "/faq", prefetch: false },
  ];

  const [active, setActive] = useState(false)
  const [menu, setMenu] = useState(false)
  const ref = useRef(null);
  const router = useRouter()


  const closeOpenMenus = useCallback(
    (e) => {
      if (String(e.target.className).includes("mobNavItem") || String(e.target.className).includes("mobNavItemChild")) {
        return;
      }
        if (
          (ref.current && active && !ref.current.contains(e.target)) ||
          ref.current.contains(e.target)
        ) {
          setActive(false);
          if(e.target.href) router.push(e.target.href)
        }
    },
    [active]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  
  return (
    <motion.div
      className={styles.head}
      initial={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.top}>
        <button className="secondary-btn" style={{color: 'white'}}>Call - 123 456 789</button>
        <Image src={Logo} alt="logo" loading='eager'/>

        <Link href={"/book-a-table"}>
          <button className="main-btn">Reservation</button>
        </Link>
      </div>
      <div className={styles.center}>
        <div className={styles.navItems}>
          {navItems.map((item) => {
            if (item.name === "Pages") {
              return (
                <div
                  key={item.id}
                  className={styles.navItem}
                >
                  <p>
                    {item.name}
                    <Image src={ArrowDown} alt="arrow" width={20} height={20} />
                  </p>
                  <div>
                    {nestedNavItems.map((item) => {
                      return (
                        <Link key={item.id} href={item.path} legacyBehavior prefetch={item.prefetch}>
                          <a
                            className={
                              router.pathname.includes(item.path) && styles.activee
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  legacyBehavior
                  prefetch={item.prefetch}
                >
                  <a
                  className={router.pathname === item.path && styles.activee}
                  >
                  {item.name}
                  </a>
                </Link>
              );
            }
          })}
        </div>
        {!active ? (
          <div className={styles.burger} onClick={() => setActive(true)}>
            <AiOutlineMenu />
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
      >
        {navItems.map((item) => {
          if (item.name === "Pages") {
            return (
              <div
                key={item.id}
                className={styles.mobNavItem}
                onClick={() => setMenu(!menu)}
              >
                <p className="mobNavItemChild" onClick={() => setMenu(!menu)}>
                  {item.name}
                  <Image
                    src={ArrowDown}
                    className="mobNavItemChild"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </p>
                <div style={{ display: menu ? "flex" : "none" }}>
                  {nestedNavItems.map((item) => {
                    return (
                      <Link key={item.id} href={item.path} legacyBehavior prefetch={item.prefetch}>
                        <a>{item.name}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <Link key={item.id} href={item.path} legacyBehavior prefetch={item.prefetch}>
                <a>{item.name}</a>
              </Link>
            );
          }
        })}
      </motion.div>
    </motion.div>
  );
}

export default Header