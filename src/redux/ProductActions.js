import ActionTypes from "./ActionTypes";
export const SetProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};
export const SelectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS
  };
};
