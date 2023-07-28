import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import authReducer from "./authReducer";

export const allReducers = combineReducers({
  loginReducer,
  registerReducer,
  authReducer
});
