import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/header/headerSlice";
import authReducer from "./features/user/userSlice";
import newsReducer from "./features/news/newsSlice";

export const store = configureStore({
  reducer: {
    headerPopup: headerReducer,
    auth: authReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
