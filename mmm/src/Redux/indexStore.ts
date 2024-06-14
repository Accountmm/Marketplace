import { configureStore } from "@reduxjs/toolkit";
import { Products } from "./Products";
import { AuthStore } from "./AuthStore";
import { AccountStore } from "./AccountStore";

export const store = configureStore({
  reducer: {
    products: Products.reducer,
    auth: AuthStore.reducer,
    account: AccountStore.reducer,
  }
})