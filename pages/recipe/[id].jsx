import Head from 'next/head'
import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import Image from 'next/image';
import food from '../../assets/foods.jpg'
import styles from '../../styles/Recipe.module.css'
// import onion from '../../assets/onion.jpg'
import { Food } from '../../db/Foods';




const index = ({data}) => {
  console.log(data[0])
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
          <h2>{data[0].name}</h2>
          <div className={styles.img}>
            <Image src={data[0].photo} alt="food" />
          </div>
        </div>
        <div className={styles.table}>
          <h2>Ingredients</h2>
          <div className={styles.tableContainer}>
            <div className={styles.left}>
              <div className={styles.leftCont}>
                {data[0].Ingredients.map((item) => {
                  return (
                    <div key={item.id} className={styles.ingredient}>
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
                    <p>{data[0].time}</p>
                  </div>
                  <div>
                    <p>Difficulty:</p>
                    <p>{data[0].difficulty}</p>
                  </div>
                  <div>
                    <p>Serving:</p>
                    <p>{data[0].servings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomTableContainer}>
            <div className={styles.left}>
              <h2>Instructions</h2>
              <div className={styles.instructions}>
                {data[0].instructions.map((item, index) => {
                  return (
                    <div className={styles.instr} key={item.id}>
                      <h3>Step{index + 1}</h3>
                      <p>{item.step}</p>
                    </div>
                  );
                })}
                {/* <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ea placeat perspiciatis maxime quis eligendi vel
                    aperiam asperiores quibusdam inventore, velit officiis et
                    eos totam quod neque accusantium quisquam tempora?
                  </p>
                </div>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ea placeat perspiciatis maxime quis eligendi vel
                    aperiam asperiores quibusdam inventore, velit officiis et
                    eos totam quod neque accusantium quisquam tempora?
                  </p>
                </div>
                <div className={styles.instr}>
                  <h3>hhhhhhh</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis ea placeat perspiciatis maxime quis eligendi vel
                    aperiam asperiores quibusdam inventore, velit officiis et
                    eos totam quod neque accusantium quisquam tempora?
                  </p>
                </div> */}
              </div>
            </div>
            <div className={styles.right}>
              <h2>Nutrition Info</h2>
              <div className={styles.nutrition}>
                <div className={styles.nutInfo}>
                  <p>Calories</p>
                  <div></div>
                  <span>{data[0].calories}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Saturated Fat</p>
                  <div></div>
                  <span>{data[0].saturatedFat}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Polyunsaturated Fat</p>
                  <div></div>
                  <span>{data[0].polyunsaturatedFat}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Cholesterol</p>
                  <div></div>
                  <span>{data[0].cholesterol}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Sodium</p>
                  <div></div>
                  <span>{data[0].sodium}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Protein</p>
                  <div></div>
                  <span>{data[0].protein}</span>
                </div>
                <div className={styles.nutInfo}>
                  <p>Potassium</p>
                  <div></div>
                  <span>{data[0].potassium}</span>
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

export async function getStaticPaths() {
  const paths = Food.map(item => {
    return{
      params: {
        id: `${item.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const {params} = context;
  console.log(params);
  const data = Food.filter(item => item.id === Number(params.id))
  return {
    props: {
      data
    }
  }

}