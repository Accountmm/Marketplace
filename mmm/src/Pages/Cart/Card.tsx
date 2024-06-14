import { FC } from 'react'
import style from './Cart.module.scss'
interface IParams {
  img?: string
  title: string
  price: string | number
  quontity: string | number
  total: string | number
}
const Card: FC<IParams> = ({ price, img, quontity, title, total }) => {
  return (
    <>
      <div className={style.card}>

        <div className={style.info}>
          {img && <img src={img} alt="product" />}
          <h3 className={style.title}>{title}</h3>
        </div>

        <p className={style.text}>{(isNaN(Math.ceil(+price)) ? price : Math.ceil(+price))}</p>

        <p className={style.text}>{quontity}</p>

        <p className={style.text}>{(typeof total) === 'number' ? Math.ceil(+total) : total}</p>
      </div>
    </>
  )
}

export default Card