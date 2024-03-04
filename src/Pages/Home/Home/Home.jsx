import { Helmet } from "react-helmet-async";
import PopularMenu from "../../PopularMenu/PopularMenu";
import Testimponials from "../../Testimonials/Testimponials";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimponials></Testimponials>
    </div>
  );
};

export default Home;
