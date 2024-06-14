import { useQuery } from "@tanstack/react-query"
import api from "./Api"

const getProductsCart = () => {
  return useQuery({
    queryKey: ['products_cart'],
    queryFn: () => {
      return api.get('shop/product_cart/list/')
    }
  })
}

export default getProductsCart