import { useMutation } from "@tanstack/react-query"
import api from "./Api"
interface IParams {
  title: string
  slug: string
  content: string
}
const addCommentMutation = () => {
  return useMutation({
    mutationKey: ['add_comment'],
    mutationFn: ({ title, slug, content }: IParams) => {
      return api.post('shop/product/comments_add/', { product: slug, title: title, content: content })
    }
  })
}

export default addCommentMutation