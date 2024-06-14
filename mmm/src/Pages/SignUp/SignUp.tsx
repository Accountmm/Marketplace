import { SubmitHandler, useForm } from 'react-hook-form'
import RegisterLayout from '../../Layout/AuthLayout'
import { ISignUp } from '../../Types/Auth'
import CustomInput from '../../Components/UI/CustomInput/CustomInput'
import { isAxiosError } from 'axios'
import { useState } from 'react'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { useSignUpMutation } from '../../Services/AuthUserMutation'
import { Link, useNavigate } from 'react-router-dom'
import Path from '../../Routes/Routes'
import { useDispatch } from 'react-redux'
import { changeRegister } from '../../Redux/AuthStore'

const SignUp = () => {
  const [error, seterror] = useState('')
  console.warn(error);
  const dispathch = useDispatch()
  const {
    reset,
    formState: {
      isValid,
      errors,
    },
    register,
    handleSubmit,
  } = useForm<ISignUp>({
    mode: 'onChange'
  })

  const signUpMutation = useSignUpMutation()
  const navigate = useNavigate()

  const SignUp: SubmitHandler<ISignUp> = async (data) => {
    try {
      await signUpMutation.mutateAsync(data)
      navigate(Path.login)
      dispathch(changeRegister())
    } catch (error) {
      if (isAxiosError(error)) {
        seterror('')
        seterror(error.message)
      } else if (error instanceof Error) {
        seterror(error.message)
      }
      reset()
    }
  }
  return (
    <RegisterLayout >
      <div className="register">
        <h1 className="register__title">Create an account</h1>
        <p className="register__text">Enter your details below</p>
        <form action="" className="register__form" onSubmit={handleSubmit(SignUp)}>
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
            type='email'
            placeholder='Email'
            register={register('email', {
              required: 'Email is incorrect',
            })}
            errors={errors.email}
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
        <p className="register__text2">Already have account? <Link to={Path.login}>Log in</Link></p>
      </div>
    </RegisterLayout>
  )
}

export default SignUp