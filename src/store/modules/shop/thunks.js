import { addProduct, rmvProduct } from "./actions";

export const addProductThunk = (product) => (dispatch) => {
  const currentCart = JSON.parse(localStorage.getItem("@shop/cart")) || [];
  currentCart.push(product);
  localStorage.setItem("@shop/cart", JSON.stringify(currentCart));

  dispatch(addProduct(currentCart));
};

export const rmvProductThunk = (product) => (dispatch) => {
  const currentCart = JSON.parse(localStorage.getItem("@shop/cart")) || [];
  const filteredCart = [
    ...currentCart.filter(
      (notebook, index, array) =>
        index !== array.findIndex((element) => element.name === product.name)
    ),
  ];

  localStorage.setItem("@shop/cart", JSON.stringify(filteredCart));

  dispatch(rmvProduct(filteredCart));
};
