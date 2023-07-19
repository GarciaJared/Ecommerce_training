import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);
  // eslint-disable-next-line react/prop-types
  const { title, image, price, category } = data; //props
  //console.log(data);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartStateProducts([...context.cartStateProducts, productData]);
    context.openCheckoutSideMenu();
    context.closedProductDetail();
    //console.log("CART:", context.cartStateProducts);
  };
    

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
        <div
          onClick={(event) => addProductsToCart(event, data)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <PlusIcon className="h-5 w-5 text-black-500" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
