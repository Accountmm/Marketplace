import RegisterLayout from '../../Layout/AuthLayout'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomInput from '../../Components/UI/CustomInput/CustomInput'
import { ILogin } from '../../Types/Auth'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { Link, useNavigate } from 'react-router-dom'
import Path from '../../Routes/Routes'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { useLogInMutation } from '../../Services/AuthUserMutation'
import { useDispatch } from 'react-redux'
import { changeRegister } from '../../Redux/AuthStore'

const LogIn = () => {
  const [error, setError] = useState<string>('')
  const dispathch = useDispatch()
  if (error.length) {
    console.warn(error);
  }

  const {
    reset,
    register,
    handleSubmit,
    formState: {
      isValid,
      errors
    }
  } = useForm<ILogin>(
    { mode: 'onChange' }
  )
  const logInMutation = useLogInMutation()
  const navigate = useNavigate()

  const LogIn: SubmitHandler<ILogin> = async (data) => {
    try {
      await logInMutation.mutateAsync(data)
      navigate(Path.mainPage)
      dispathch(changeRegister())
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error) {
        setError(error.message)
      }
      reset()
    }
  }
  return (
    <RegisterLayout >
      <div className="register">
        <h1 className="register__title">Log in to Exclusive</h1>
        <p className="register__text">Enter your details below</p>
        <form action="" className="register__form" onSubmit={handleSubmit(LogIn)}>
          <CustomInput
            type='text'
            placeholder='Name'
            register={register('username', {
              required: 'Username is incorrect',
              minLength: {
                value: 3,
                message: 'Min length is 3'
              }
            })}
            errors={errors.username}
          />

          <CustomInput
            type='password'
            placeholder='Password'
            register={register('password', {
              required: 'Password is incorrect',
            })}
            errors={errors.password}
          />
          <CustomBtn width={'100%'} height={56} text='Create Account' isValid={!isValid} />
        </form>
        <p className="register__text2">Don't have an account? <Link to={Path.signUp}>Sign up</Link></p>
      </div>
    </RegisterLayout>
  )
}

export default LogIn