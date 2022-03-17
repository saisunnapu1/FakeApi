import { SET_PRODUCTS, SELECTED_PRODUCTS } from "./ActionTypes";
export const SetProducts = (products) => {
  console.log(products, "action");
  return {
    type: SET_PRODUCTS,
    payload: products
  };
};
export const SelectedProducts = (product) => {
  return {
    type: SELECTED_PRODUCTS
  };
};
