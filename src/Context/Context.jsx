import { createContext, useState } from "react";
import PropTypes from "prop-types";

//Create context and prepare to exportation
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail · Open/close
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => setProductDetailOpen(true);
  const closedProductDetail = () => setProductDetailOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({
    title: "",
    image: [],
    description: "",
    price: "",
  });
  console.log("count", count);

  // Shopping cart context · Add products to cart
  const [cartStateProducts, setCartStateProducts] = useState([]);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closedProductDetail,
        productToShow,
        setProductToShow,
        cartStateProducts,
        setCartStateProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
