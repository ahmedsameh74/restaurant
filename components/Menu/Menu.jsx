import styles from "../../styles/Menu.module.css";
import foods from "../../assets/foods.jpg";

import Image from "next/image";
import MenuItem from "../MenuItem/MenuItem";
import { motion } from "framer-motion";
import SubHead from "../SubHead/SubHead";

const Menu = () => {
  const menu = [
    {
      name: "Starter",
      id: 1,
      dishes: [
        {
          name: "Grilled Salmon with Dill Sauce",
          desc: "Shuck the scallop to that used for oysters",
          price: "20$",
        },
        {
          name: "Spring Roll",
          desc: "Add oil to a hot pan spring onion whites",
          price: "40$",
        },
        {
          name: "French Onion Soup",
          desc: "Wheat flour, apple cider vinegar, bread",
          price: "15$",
        },
        {
          name: "Tomato Bruschetta",
          desc: "Bread, olive oil, garlic, black pepper",
          price: "30$",
        },
      ],
    },
    {
      name: "Main Dish",
      id: 2,
      dishes: [
        {
          name: "Grilled Salmon with Dill Sauce",
          desc: "Brown sugar, salmon fillet, Dijon mustard",
          price: "40$",
        },
        {
          name: "Roast Beef with Vegetable",
          desc: "Green beans, rib eye, olive oil, beef",
          price: "35$",
        },
        {
          name: "Marrkesh Vegetetarian Curruy",
          desc: "Sweet potato, eggplant, garbanzo bean",
          price: "45$",
        },
        {
          name: "Spicy Vegan Potato Curry",
          desc: "Coconut milk, beans, potatoes, curry powder",
          price: "35$",
        },
      ],
    },
    {
      name: "Dessert",
      id: 2,
      dishes: [
        {
          name: "Apple Pie with Cream",
          desc: "Whipping cream, egg white, cinnamon",
          price: "15$",
        },
        {
          name: "Lemon Meringue Pie",
          desc: "Frozen pie crust, meringue, lemon",
          price: "35$",
        },
        {
          name: "Marrkesh Vegetetarian Curruy",
          desc: "Sweet potato, eggplant, garbanzo bean",
          price: "45$",
        },
      ],
    },
  ];


  return (
    <div className={styles.menuPage}>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideNav}
      >
        {/* <div className={styles.sideNav}> */}
          <SubHead
            title="MENU"
            subTitle="Try Our Special Dishes"
            desc="Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area."
            color="#000"
            align="start"
            width="100%"
          />
          <div className={styles.photo}>
            <Image src={foods} alt="foods" />
          </div>
          <button
            className="secondary-btn"
            style={{ width: "50%", fontSize: "19px" }}
          >
            See All Dishes
          </button>
        {/* </div> */}
      </motion.div>
      <div className={styles.menu}>
        {/* <MenuItem /> */}
        {menu.map((item) => {
          return (
            <MenuItem key={item.id} name={item.name} dishes={item.dishes} />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
