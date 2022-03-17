const SET_PRODUCTS = "SET_PRODUCTS";
const initialState = {
  products: []
};
export const ProductReducer = (state = initialState, { payload, type }) => {
  console.log(type, payload, "reducer");
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
