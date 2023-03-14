import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

const initialState = {
    accounts:{},
    selectedAccount:""
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;