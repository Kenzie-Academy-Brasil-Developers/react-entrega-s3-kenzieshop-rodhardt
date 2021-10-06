import { ADD_PRODUCTS, RMV_PRODUCTS } from "./actionTypes";

const currentCart = localStorage.getItem("@shop/cart") || [];

const shopReducer = (state = currentCart, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [...state, action.product];

    case RMV_PRODUCTS:
      return [
        ...state.filter((notebook) => notebook.name !== action.product.name),
      ];

    default:
      return state;
  }
};

export default shopReducer;
