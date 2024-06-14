import { useQuery } from "@tanstack/react-query"
import api from "./Api"
interface IParams {
  sort?: string
  catalog?: number | string
}
const getSortProducts = ({ sort, catalog }: IParams) => {
  return useQuery({
    queryKey: ['sort_products', sort, catalog],
    queryFn: () => {
      return api.get(`shop/products/?${catalog && `category_id=${catalog}`}&${sort && `ordering=${sort}`}`)
    }
  })
}

export default getSortProducts