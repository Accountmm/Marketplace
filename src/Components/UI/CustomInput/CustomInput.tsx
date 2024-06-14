import { FC } from 'react'
import style from './CustomInput.module.scss'
interface IParams {
  type: 'text' | 'password' | 'number' | 'email'
  placeholder: string
  register?: any
  errors?: any
  width?: string
  height?: string
  bg?: string
  value?: string | number
  chengeValue?: any
}
const CustomInput: FC<IParams> = ({ placeholder, errors, register, type, height, width, bg, value, chengeValue }) => {
  return (
    <>
      {
        !!bg
          ?
          <input
            {...register}
            type={type}
            className={`cutom__input ${!!bg?.length && `active`} `}
            placeholder={placeholder}
            style={{ width: width, height: height, backgroundColor: bg }}
            value={value}
            onChange={(e) => chengeValue ? chengeValue(e.target.value) : false}
          />
          : <div className={style.box} >
            <input
              {...register}
              type={type}
              className={`cutom__input ${!!bg?.length && `active`}`}
              placeholder={placeholder}
              style={{ width: width, height: height, backgroundColor: bg }}
            />
            {errors && <p className={style.text}>{errors.message}</p>}
          </div>
      }
    </>
  )
}

export default CustomInput