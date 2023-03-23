import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducer/slice";

let store = configureStore({
  reducer: {
    rename : slice.reducer,
  },
});

export default store;
