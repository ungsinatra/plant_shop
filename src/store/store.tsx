import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSilce from "./reducers/filterSlice";
import paginationSlice from "./reducers/paginationSlice";
import cartSlice from "./reducers/cartSlice.ts";
import productsSlice from "./reducers/productsSlice.ts";
const rootReducer = combineReducers({
  filter: filterSilce,
  pagination: paginationSlice,
  cart: cartSlice,
  products: productsSlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
