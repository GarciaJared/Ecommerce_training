import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import "./checkoutside.css";
import OrderCard from "../OrderCard/OrderCard";
import {totalPrice} from "../../Utils/Utils"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("CART:", context.cartStateProducts);

  const handleDelete = (id) => {
    const filteredProducts = context.cartStateProducts.filter(
      (product) => product.id != id
    );
    context.setCartStateProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } scrollable-cards checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-2 overflow-y-scroll">
        {context.cartStateProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-2">
        <p className="flex justify-between items-center">
          <span className="font-light">Total: </span>
          <span className="font-medium text-xl">${totalPrice(context.cartStateProducts)}</span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
