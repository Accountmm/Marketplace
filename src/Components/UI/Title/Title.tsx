import { FC } from "react";
import style from "./Title.module.scss";
interface IParams {
  text: string
  title?: string
}
const Title: FC<IParams> = ({ text, title }) => {
  return (
    <div className={style.info}>
      <div className={style.text_div}>
        <div className={style.orange}></div>
        <span className={style.text}>{text}</span>
      </div>
      <h2 className={style.title}>{title}</h2>
    </div>
  )
}

export default Title