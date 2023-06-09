import Head from 'next/head'
import styles from '../../styles/Faq.module.css'
import PageHead from '../../components/PageHead/PageHead'
import SubHead from '../../components/SubHead/SubHead';
import Image from 'next/image';
import arrow from '../../assets/icons/down-arrow-b.svg'
import { motion } from 'framer-motion';
import { useState } from 'react';

const Comp = () => {
    const [active, setActive] = useState(false);
    return {active, setActive}
}

const variants = {
  open: {
    opacity: 1,
    //  y: 0,
    //   scaleY: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    //  scaleY: 0,
    //  y: 0,
    height: 0,
  },
};

const variantsp = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
}
const variantsi = {
  open: {
    rotate: "180deg",
  },
  closed: {
    rotate: "0",
  },
};

const Index = () => {
    const [active, setActive] = useState({open: false, index: null});
    // console.log(Comp())

  return (
    <>
      <Head>
        <title>FAQ | Restaurant</title>
        <meta name="description" content="restaurant FAQ page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={`FAQ`} />
        <div className={styles.body}>
          <SubHead
            width={"95%"}
            align={"center"}
            color={"black"}
            title={"QUESTIONS"}
            subTitle={"Frequently Asked Questions"}
          />

          <div className={styles.questions}>
            {Array.from('yass').map((item, i) => {
                return (
                  <div
                    className={styles.question}
                    key={i}
                    onClick={() => setActive({ open: !active.open, index: i })}
                  >
                    <div className={styles.questionHead}>
                      <p>How long is this course in live?</p>
                      <motion.div
                        animate={
                          active.open && active.index === i ? "open" : "closed"
                        }
                        variants={variantsi}
                        initial="closed"
                        exit="collapsed"
                        className={styles.arrow}
                      >
                        <Image src={arrow} alt="arrow" />
                      </motion.div>
                    </div>
                    <motion.div
                      animate={
                        active.open && active.index === i ? "open" : "closed"
                      }
                      variants={variants}
                      initial="closed"
                      exit="collapsed"
                      className={styles.answer}
                    >
                      <motion.p
                        animate={
                          active.open && active.index === i ? "open" : "closed"
                        }
                        variants={variantsp}
                        initial="closed"
                        exit="collapsed"
                        transition={{ duration: 0.3 }}
                      >
                        {
                          "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators."
                        }
                      </motion.p>
                    </motion.div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index