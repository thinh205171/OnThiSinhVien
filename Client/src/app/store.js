import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../featutes/user/userSlice";
import headerReducer from "../featutes/header/headerSlice";

const store = configureStore({
  reducer: {
    headerPopup: headerReducer,
    auth: authReducer,
  },
});

export default store;
