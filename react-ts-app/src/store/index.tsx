import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import searchSlice from "./searchSlice";
import formSlice from "./formSlice";
export type State = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    string: searchSlice,
    products: productsSlice,
    form: formSlice,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
