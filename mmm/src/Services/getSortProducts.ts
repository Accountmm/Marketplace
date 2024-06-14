import { useQuery } from "@tanstack/react-query"
import api from "./Api"
interface IParams {
  sort: string
}
const getSortProducts = ({ sort }: IParams) => {
  return useQuery({
    queryKey: ['sort_products', sort],
    queryFn: () => {
      return api.get(`shop/products/?ordering=${sort}`)
    }
  })
}

export default getSortProducts