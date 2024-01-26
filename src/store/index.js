import { configureStore } from "@reduxjs/toolkit";
import clickCounterReducer from "./ClickCounterSlice";
export const store = configureStore({
  reducer: {
    clickCounter: clickCounterReducer,
  },
});
