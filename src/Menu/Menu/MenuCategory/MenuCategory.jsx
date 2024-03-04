import { Link } from "react-router-dom";
import Cover from "../../../Pages/Shared/Cover/Cover";
import MenuItem from "../../../Pages/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="py-8 ">
      {title && <Cover image={image} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
