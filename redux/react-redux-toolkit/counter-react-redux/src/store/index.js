import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter"
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export default counterStore;
