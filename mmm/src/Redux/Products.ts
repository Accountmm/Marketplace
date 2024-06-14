import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../Types/ProductsType";
const initialState = {
  error: false,
  products: [],
  cart: [],
  isLoading: false,
  searchValue: '',
  sortValue: '',
}


export const Products = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    changeEror: (state) => {
      state.error = !state.error
    },
    changeProducts: (state, action) => {
      state.products = action.payload
    },
    changeCart: (state, action) => {
      state.cart = action.payload
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    changeSortValue: (state, action) => {
      state.sortValue = action.payload
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    filterProducts: (state, action) => {
      state.products = state.products.filter((product: IProduct) => product.name.trim().toLowerCase().includes(action.payload.trim().toLowerCase()))
    },
  }
})
export const { changeEror, changeProducts, changeCart, filterProducts, changeSearchValue, changeSortValue, changeIsLoading } = Products.actions