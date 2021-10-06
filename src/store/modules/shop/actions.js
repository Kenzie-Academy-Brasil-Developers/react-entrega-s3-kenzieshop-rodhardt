import { ADD_PRODUCTS } from "./actionTypes";
import { RMV_PRODUCTS } from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCTS,
  product,
});

export const rmvProduct = (product) => ({
  type: RMV_PRODUCTS,
  product,
});
