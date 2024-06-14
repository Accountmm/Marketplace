import { ICatalog } from "./CatalogType"

export interface IProduct {
  category: ICatalog
  image: string
  id?: number
  long_description: string
  name: string
  price: string | number
  quantity: number
  short_description: string
  slug: string
  discount: number
  quontity?: number
}