import { FC } from 'react'
import style from './CustomBtn.module.scss'
type Width = number | string
interface IParams {
  text: string
  mrlr?: string
  width: Width
  height: number
  mt?: number
  fn?: () => void
  isValid?: boolean
  mrl?: string
}
const CustomBtn: FC<IParams> = ({ height, text, width, mrlr, mt, isValid, fn, mrl }) => {
  return (
    <button onClick={() => fn ? fn() : false} disabled={isValid} style={{ height: height, width: width, marginLeft: mrlr || mrl, marginRight: mrlr, marginTop: mt, }} className={style.btn} >
      {text}
    </button >
  )
}

export default CustomBtn