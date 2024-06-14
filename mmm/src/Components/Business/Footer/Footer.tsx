import { NavLink } from "react-router-dom";
import { naviagtion } from "../Nav/Nav";
import style from "./Foter.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__box}>
          <div className={style.list}>
            <h3 className={style.title}>Exclusive</h3>
            <div className={style.info}>
              {
                naviagtion.map(el => (
                  <NavLink key={el.id} to={el.navigateTo} className='footer__link'>
                    {el.text}
                  </NavLink>
                ))
              }
            </div>
          </div>
          <p className={style.text}> 2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer