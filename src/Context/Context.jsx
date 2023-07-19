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
  //console.log("count", count);

  // Shopping cart context · Add products to cart
  const [cartStateProducts, setCartStateProducts] = useState([]);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const onAdd = (product) => {
    const productExists = cartStateProducts.some(
      (elem) => elem.id === product.id
    );
    if (productExists) {
      const productCart = cartStateProducts.find(
        (elem) => elem.id === product.id
      );
      productCart.quantity += 1;
    } else {
      product.quantity = 1;
      setCartStateProducts([...cartStateProducts, product]);
    }
    setCount(count + 1);
  };
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
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        onAdd,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
