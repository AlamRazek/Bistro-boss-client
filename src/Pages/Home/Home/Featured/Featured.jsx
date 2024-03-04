import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";
import image from "../../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20 bg-fixed">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-20">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2024</p>
          <p className="uppercase font-bold text-lg">Where can i get some</p>
          <p>
            Experience the Art of Gastronomy: Welcome to Bistro-Boss, where
            every dish tells a story of passion and creativity. Immerse yourself
            in a symphony of flavors, meticulously crafted by our talented
            chefs. Whether you're craving classic favorites or daring culinary
            adventures, our menu promises to delight your palate and leave you
            craving for more. Join us for an unforgettable dining experience
            where every bite is a masterpiece
          </p>
          <button className="btn glass border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
