import { useQuery } from "@tanstack/react-query"
import api from "./Api"
interface IParams {
  catalog: string
}
const getCatalog = ({ catalog }: IParams) => {
  return useQuery({
    queryKey: ['catalog', catalog.toLowerCase()],
    queryFn: () => {
      return api.get(`shop/products/category/${catalog.toLowerCase()}`)
    }
  })
}

export default getCatalog