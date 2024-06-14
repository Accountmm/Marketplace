import { useQuery } from "@tanstack/react-query"
import api from "./Api"

const getAccount = () => {
  return useQuery({
    queryKey: ['account'],
    queryFn: () => {
      return api.get('users/profile/')
    }
  })
}

export default getAccount