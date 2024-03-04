import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaHouse,
  FaList,
  FaMessage,
  FaSearchengin,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHouse></FaHouse>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser></FaUser>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHouse></FaHouse>
                  User Home
                </NavLink>
              </li>
              {/*     <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/cart">
                  <FaCartShopping></FaCartShopping>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              {/*       <li>
                <NavLink to="/dashboard/review">
                  <FaMessage></FaMessage>
                  Add Review
                </NavLink>
              </li> */}
              {/*     <li>
                <NavLink to="/dashboard/booking">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li> */}
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearchengin></FaSearchengin>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
