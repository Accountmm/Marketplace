import { useQuery } from "@tanstack/react-query"
import api from "./Api"
interface IParams {
  slug: string
}

const getProductComments = ({ slug }: IParams) => {
  return useQuery({
    queryKey: ['product_comments'],
    queryFn: () => {
      return api.get(`shop/product/comments_list/${slug}`)
    }
  })
}

export default getProductComments