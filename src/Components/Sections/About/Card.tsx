import { FC } from 'react'
import style from "./About.module.scss";
interface IParams {
  img: string
  title: string
  text: string
}
const Card: FC<IParams> = ({ img, text, title }) => {
  return (
    <>
      <div className={style.card}>
        <img src={img} alt="" />
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
      </div>
    </>
  )
}

export default Card