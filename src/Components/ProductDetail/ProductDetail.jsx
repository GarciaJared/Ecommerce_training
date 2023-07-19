import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";

import "./ProductDetails.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  //console.log("Products to show:", context.productToShow);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium txt-xl">Details</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closedProductDetail()}
            className="h-6 w-6 text-black-500"
          ></XMarkIcon>
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl">
          {context.productToShow.title}
        </span>
        <span className="font-light text-smd">
          {context.productToShow.description}
        </span>
        <span className="font-medium text-md">
          ${context.productToShow.price}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
