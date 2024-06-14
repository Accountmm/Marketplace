import { useQuery } from "@tanstack/react-query"
import api from "./Api"

const getCatalogs = () => {
  return useQuery({
    queryKey: ['categorys'],
    queryFn: () => {
      return api.get('shop/categories/')
    }
  })
}


export default getCatalogs