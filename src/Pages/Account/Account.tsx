import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../../Layout/MainLayout'
import getAccount from '../../Services/GetAccount'
import { IAccountStore } from '../../Types/AccountStoreType'
import Loading from '../../Components/Loaders/Loading'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { useNavigate } from 'react-router-dom'
import Path from '../../Routes/Routes'
import style from "./Account.module.scss";
import { useEffect } from 'react'
import { changeAccount } from '../../Redux/AccountStore'
const Account = () => {
  const { isFetching, isLoading, data } = getAccount()

  const dispatch = useDispatch()

  useEffect(() => {
    if (data?.data) {
      dispatch(changeAccount(data.data))
    }
  }, [data])

  const username = useSelector((state: { account: IAccountStore }) => state.account.username)
  const first_name = useSelector((state: { account: IAccountStore }) => state.account.first_name)
  const last_name = useSelector((state: { account: IAccountStore }) => state.account.last_name)
  const email = useSelector((state: { account: IAccountStore }) => state.account.email)

  console.log(email);


  const navigate = useNavigate()
  function naviagteToCahngeAccount() {
    navigate(Path.edditaccount)
  }

  if (isLoading || isFetching) return <Loading />

  return (
    <MainLayout>
      <section className='page'>
        <div className="min-container">
          <div className={style.account__box}>
            <h2 className={style.title}>Your account</h2>
            <div className={style.info}>
              <div className={style.div}>
                <h3 className={style.div__title}>First Name:</h3>
                <p className={style.div__name}>{first_name.length ? first_name : `Empty`}</p>
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>Last Name:</h3>
                <p className={style.div__name}>{last_name.length ? last_name : `Empty`}</p>
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>Email:</h3>
                <p className={style.div__name}>{email}</p>
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>User name:</h3>
                <p className={style.div__name}>{username}</p>
              </div>
            </div>

            <CustomBtn text='Change account' height={50} width={190} mrl='auto' fn={naviagteToCahngeAccount} />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Account