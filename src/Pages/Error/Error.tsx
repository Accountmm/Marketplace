import { useNavigate } from 'react-router-dom'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import MainLayout from '../../Layout/MainLayout'
import style from './Error.module.scss'
import Path from '../../Routes/Routes'

const Error = () => {
  const navigate = useNavigate()
  function naviagteToHomePage() {
    navigate(Path.mainPage)
  }
  return (
    <MainLayout>
      <section className={style.error}>
        <h1 className={style.title}>404 Not Found</h1>
        <p className={style.text}>Your visited page not found. You may go home page.</p>
        <CustomBtn height={55} width={190} text='Back to home page' fn={naviagteToHomePage} />
      </section>
    </MainLayout>
  )
}

export default Error