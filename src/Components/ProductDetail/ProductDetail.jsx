import { XMarkIcon } from "@heroicons/react/24/solid";

import "./ProductDetails.css";

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium txt-xl">Details</h2>
        <div><XMarkIcon className="h-6 w-6 text-black-500"></XMarkIcon></div>
      </div>
    </aside>
  );
};

export default ProductDetail;
