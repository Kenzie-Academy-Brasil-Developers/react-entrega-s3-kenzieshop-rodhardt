import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import shopReducer from "./modules/shop/reducer.js";

const reducers = combineReducers({
  products: shopReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
