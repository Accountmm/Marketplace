import { IProduct } from "./ProductsType";

export interface IProducts {
  error: boolean,
  products: IProduct[],
  cart: IProduct[],
  searchValue: string,
  sortValue: string,
  isLoading: boolean
}