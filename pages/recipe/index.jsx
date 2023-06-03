import Head from 'next/head'
import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import Image from 'next/image';
import food from '../../assets/foods.jpg'
import styles from '../../styles/Recipe.module.css'
import onion from '../../assets/onion.jpg'


const Ingredients = [
  {name: 'onio', amount: '1 kg', img: onion},
  {name: 'onio', amount: '1 kg', img: onion},
  {name: 'onio', amount: '1 kg', img: onion},
  {name: 'onio', amount: '1 kg', img: onion},
  {name: 'onio', amount: '1 kg', img: onion},
  {name: 'onio', amount: '1 kg', img: onion},
]

const index = () => {
  return (
    <>
      <Head>
        <title>Particular Recipe | Restaurant</title>
        <meta name="description" content="restaurant Particular Recipe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PageHead title={"Particular Recipe"} />
        <div className={styles.recipe}>
          <h2>Potatoes And Peas In Curry</h2>
          <div className={styles.img}>
            <Image src={food} alt="food" />
          </div>
        </div>
        <div className={styles.table}>
          <h2>Ingredients</h2>
          <div className={styles.tableContainer}>
            <div className={styles.left}>
              <div className={styles.leftCont}>
                {Ingredients.map((item, idx) => {
                  return (
                    <div key={idx} className={styles.ingredient}>
                      <Image src={item.img} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.amount}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightWrapper}>
                <Image src={food} alt="food" />
                <div className={styles.details}>
                  <div>
                    <p>Cooking Time:</p>
                    <p>25 min</p>
                  </div>
                  <div>
                    <p>Cooking Time:</p>
                    <p>25 min</p>
                  </div>
                  <div>
                    <p>Cooking Time:</p>
                    <p>25 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomTableContainer}>
            <div className={styles.left}>
              <h2>Instructions</h2>
              <div className={styles.instructions}>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea placeat perspiciatis maxime quis eligendi vel aperiam asperiores quibusdam inventore, velit officiis et eos totam quod neque accusantium quisquam tempora?</p>
                </div>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea placeat perspiciatis maxime quis eligendi vel aperiam asperiores quibusdam inventore, velit officiis et eos totam quod neque accusantium quisquam tempora?</p>
                </div>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea placeat perspiciatis maxime quis eligendi vel aperiam asperiores quibusdam inventore, velit officiis et eos totam quod neque accusantium quisquam tempora?</p>
                </div>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea placeat perspiciatis maxime quis eligendi vel aperiam asperiores quibusdam inventore, velit officiis et eos totam quod neque accusantium quisquam tempora?</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <h2>Nutrition Info</h2>
              <div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index