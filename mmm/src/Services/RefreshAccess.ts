import { useMutation } from "@tanstack/react-query";
import api from "./Api";

export function useNewAccessMutation() {
  return useMutation({
    mutationKey: ['new_access'],
    mutationFn: (refresh: string) => {
      return api.post('jwt/refresh', refresh)
    }
  })
}