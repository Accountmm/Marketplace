import { useQuery } from "@tanstack/react-query"
import api from "./Api"

const getProduct = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => {
      return api.get(`shop/products/${slug}`)
    }
  })
}

export default getProduct