import { useMutation } from "@tanstack/react-query"
import api from "./Api"


const addNewProductMutation = () => {
  return useMutation({
    mutationKey: ['new_product'],
    mutationFn: (product: string) => {
      return api.post('shop/own_product/add/', product)
    },

  })
}

export default addNewProductMutation