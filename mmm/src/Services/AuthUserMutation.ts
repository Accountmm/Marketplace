import { useMutation } from "@tanstack/react-query";
import { ILogin } from "../Types/Auth";
import { authUrl } from "./Api";
export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: (userData: ILogin) => authUrl.post("auth/users/ ", userData)
  })
}
export const useLogInMutation = () => {
  return useMutation({
    mutationFn: (userData: ILogin) => authUrl.post('auth/jwt/create', userData),
    onSuccess({ data }) {
      localStorage.setItem(`access__token`, data.access)
      localStorage.setItem(`refresh__token`, data.refresh)
    }
  })
}
