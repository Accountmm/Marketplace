import Catalogs from '../../Business/CatalogsNavbar/Сatalogs'
import Slider from '../../Business/Swiper/Swiper'
import style from './Intro.module.scss'

const Intro = () => {
  return (
    <section className={style.intro}>
      <div className="container">
        <div className={style.inro__box}>
          <Catalogs />
          <Slider section={false} />
        </div>
      </div>
    </section>
  )
}

export default Intro