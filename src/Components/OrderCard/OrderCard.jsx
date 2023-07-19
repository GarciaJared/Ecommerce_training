import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrderCard = (props) => {
  OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
  };
  const {
    id,
    title,
    image,
    price,
  } = props; //props
  id;
  return (
    <div className="flex justify-between item-center mb-3">
      <div className="flex items-center gap-2">
        <span className="text-sm w-4"></span>
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <XMarkIcon className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
      </div>
    </div>
  );
};
export default OrderCard;
