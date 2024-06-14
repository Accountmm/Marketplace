import { useSelector } from 'react-redux'
import MainLayout from '../../Layout/MainLayout'
import style from './ManageAccount.module.scss'
import { useState } from 'react'
import { IAccountStore } from '../../Types/AccountStoreType'
import CustomInput from '../../Components/UI/CustomInput/CustomInput'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { AxiosError } from 'axios'
import { useChangeAccountMutation } from '../../Services/AccountMutation'

const ChangeAccount = () => {
  const user_username = useSelector((state: { account: IAccountStore }) => state.account.username)
  const user_first_name = useSelector((state: { account: IAccountStore }) => state.account.first_name)
  const user_last_name = useSelector((state: { account: IAccountStore }) => state.account.last_name)
  const user_email = useSelector((state: { account: IAccountStore }) => state.account.email)

  const [firstName, setFirstName] = useState<string>(user_first_name)
  const [lastName, setLastName] = useState<string>(user_last_name)
  const [username, setUsername] = useState<string>(user_username)
  const [email, setEmail] = useState<string>(user_email)


  const changeAccountMutation = useChangeAccountMutation()
  function changeAccountData() {
    const changedAccountData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
    }
    try {
      changeAccountMutation.mutateAsync(changedAccountData)
    } catch (error) {
      if (error instanceof Error || error instanceof AxiosError) {
        console.warn(error.message);
      }
    }
  }


  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <div className={style.manage__box}>
            <h2 className={style.title}>Edit Your Profile</h2>
            <div className={style.inputs}>
              <div className={style.div}>
                <h3 className={style.div__title}>First Name</h3>
                <CustomInput bg='#f5f5f5' placeholder='First name' type='text' value={firstName} chengeValue={setFirstName} width='400px' />
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>Last Name</h3>
                <CustomInput bg='#f5f5f5' placeholder='Last name' type='text' value={lastName} chengeValue={setLastName} width='400px' />
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>Email</h3>
                <CustomInput bg='#f5f5f5' placeholder='Email' type='email' value={email} chengeValue={setEmail} width='400px' />
              </div>
              <div className={style.div}>
                <h3 className={style.div__title}>User name</h3>
                <CustomInput bg='#f5f5f5' placeholder='User name' type='text' value={username} chengeValue={setUsername} width='400px' />
              </div>
            </div>

            <CustomBtn text='Save Changes' height={50} width={190} mrl='auto' fn={changeAccountData} />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default ChangeAccount