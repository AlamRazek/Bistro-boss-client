import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import image from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../hooks/useMenu";
import SectionTitle from "../../Pages/components/SectionTitle.jsx/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover image={image} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Dont Miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        image={dessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} title="pizza" image={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" image={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="pizza" image={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
