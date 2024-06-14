import { useMutation } from "@tanstack/react-query";
import api from "./Api";
import { IAccountStore } from "../Types/AccountStoreType";


export const useChangeAccountMutation = () => {
  return useMutation({
    mutationKey: ['account'],
    mutationFn: (data: IAccountStore) => {
      return api.patch('users/profile/update/ ', data);
    }
  });
};