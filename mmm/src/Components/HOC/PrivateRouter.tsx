import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Path from '../../Routes/Routes'

const PrivateRouter = () => {
  const naviagte = useNavigate()

  const accesToken: null | string = localStorage.getItem('access__token')

  useEffect(() => {
    if (!accesToken) {
      naviagte(Path.signUp)
    }

  }, [accesToken])

  return (
    <Outlet />
  )
}

export default PrivateRouter