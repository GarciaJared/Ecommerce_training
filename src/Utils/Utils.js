/**
 * this function calculates total price of a new order 

 * @param { Array } products  cartStateProducts: Array of objects
 * @returns { Number }  Total price

 */
export const totalPrice = function (products) {
  let sum =0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
