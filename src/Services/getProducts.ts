import { useQuery } from "@tanstack/react-query"
import api from "./Api"

const getProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return api.get('shop/products/')
    }
  })
}

export default getProducts