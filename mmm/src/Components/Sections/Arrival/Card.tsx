import { FC } from 'react'
import style from './Arrival.module.scss'
import { Link } from 'react-router-dom'
interface IParams {
  img: string
  text: string
  title: string
  to: string
}
const Card: FC<IParams> = ({ img, text, title, to }) => {
  return (
    <div className={style.card}>
      <img src={img} alt="" />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__text}>{text}</p>
      <Link to={to} className={style.card__link}>Shop Now</Link>
    </div>
  )
}

export default Card