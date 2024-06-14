import { useMutation } from "@tanstack/react-query";
import api from "./Api";

export interface IAddCart {
  product: number,
  quontity?: number
}
export const useAddCartMuation = () => {
  return useMutation({
    mutationKey: ['add_cart'],
    mutationFn: (item: IAddCart) => {
      return api.post('shop/product_cart/add/', item);
    }
  });
};

export const useDelCartMutation = () => {
  return useMutation({
    mutationKey: ['delCartproducts'],
    mutationFn: () => {
      return api.delete('shop/product_cart/delete_all/')
    }
  })
}

