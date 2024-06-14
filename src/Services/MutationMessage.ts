import { useMutation } from "@tanstack/react-query"
import api from "./Api"
import { IMessage } from "../Types/MessageType"

export const useSendMessageMutation = () => {
  return useMutation({
    mutationKey: ['message'],
    mutationFn: (data: IMessage) => {
      return api.post('users/complaint/', data)
    }
  })
}