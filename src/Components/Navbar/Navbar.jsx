import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  let activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">ShopUI</NavLink>
        </li>
        <li>@GarciaJared</li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myOrder"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyOrders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyAccount"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignIn
          </NavLink>
        </li>
        <li className="flex">
          <ShoppingCartIcon className="h-5 w-5 text-black" />
          <div>{context.count}</div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
