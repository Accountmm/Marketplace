import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL
})
export const authUrl = axios.create({
  baseURL: import.meta.env.VITE_AUTHURL
})


api.interceptors.request.use(
  (data) => {
    const accesToken = localStorage.getItem('access__token')
    if (accesToken && accesToken !== null) {
      data.headers['Authorization'] = `JWT ${accesToken}`
    }
    return data
  },
  (error) => {
    if (error instanceof AxiosError || error instanceof Error) {
      console.warn(error.message);
    }
  }
)

api.interceptors.response.use(
  (data) => {
    return data
  },
  async (_) => {
    localStorage.removeItem('access__token')
    try {
      const refresh = localStorage.getItem('refresh__token')
      const { data } = await authUrl.post('auth/jwt/refresh', { refresh: refresh })
      const newAccess = data.access
      localStorage.setItem('access__token', newAccess)
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error) {
        console.warn(error.message);
        localStorage.removeItem('refresh__token')
      }
    }
  }

)
export default api