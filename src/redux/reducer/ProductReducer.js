const SET_PRODUCTS = "SET_PRODUCTS";
const initialState = {
  products: [
    {
      id: 1,
      title: "sai",
      category: "devops"
    }
  ]
};
export const ProductReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
