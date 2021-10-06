import { ADD_PRODUCTS } from "./actionTypes";
import { RMV_PRODUCTS } from "./actionTypes";

export const addProduct = (products) => ({
  type: ADD_PRODUCTS,
  products,
});

export const rmvProduct = (products) => ({
  type: RMV_PRODUCTS,
  products,
});
