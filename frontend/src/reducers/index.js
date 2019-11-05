import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  cart: cartReducer,
  auth: authReducer,
  errors: errorReducer
});
