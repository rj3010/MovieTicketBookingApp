/** @format */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import MovieReducer from "../Reducers/reducers";

let composeEnhancer = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

let enhancer = composeEnhancer(applyMiddleware(thunk));
const store = createStore(MovieReducer, enhancer);
export default store;
