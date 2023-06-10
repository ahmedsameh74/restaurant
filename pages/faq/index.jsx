import Head from 'next/head'
import styles from '../../styles/Faq.module.css'
import PageHead from '../../components/PageHead/PageHead'
import SubHead from '../../components/SubHead/SubHead';
import Image from 'next/image';
import arrow from '../../assets/icons/down-arrow-b.svg'
import { motion } from 'framer-motion';
import { useState } from 'react';


const variants = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    overflow: 'hidden',
    height: 0,
  },
};


const variantsi = {
  open: {
    rotate: "180deg",
  },
  closed: {
    rotate: "0",
  },
};

const Index = () => {
    const [active, setActive] = useState(null);

    const toggle = (i) => {
        if(active === i) {
            return setActive(null)
        }
        setActive(i)

    }

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
                    onClick={() => toggle(i)}
                  >
                    <div className={styles.questionHead}>
                      <p>How long is this course in live?</p>
                      <motion.div
                        animate={
                          active === i ? "open" : "closed"
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
                         active === i ? "open" : "closed"
                      }
                      variants={variants}
                      initial="closed"
                      exit="collapsed"
                      className={styles.answer}
                    >
                      <p
                      >
                        {
                          "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators."
                        }
                      </p>
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