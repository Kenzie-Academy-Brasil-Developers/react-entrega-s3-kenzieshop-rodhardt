import { ADD_PRODUCTS, RMV_PRODUCTS } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@shop/cart")) || [];

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...action.products];

    case RMV_PRODUCTS:
      return [...action.products];

    default:
      return state;
  }
};

export default shopReducer;
