import MainLayout from '../../Layout/MainLayout'
import { girls } from '../../Utils/Reexprot'
import style from './About.module.scss'

const About = () => {
  return (
    <MainLayout >
      <section className='page'>
        <div className="container">
          <div className={style.story}>
            <div className={style.info}>
              <h1 className={style.title}>Our Story</h1>
              <p className={style.text}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className={style.text}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <img className={style.img} src={girls} alt="" />
          </div>

          <div className={style.cash}>
            <div className={style.card}>
              <img src="" alt="" className={style.img} />
              <h2 className={style.title}>10.5k </h2>
              <p className={style.text}>Sallers active our site</p>
            </div>
            <div className={style.card}>
              <img src="" alt="" className={style.img} />
              <h2 className={style.title}>33k</h2>
              <p className={style.text}>Mopnthly Produduct Sale</p>
            </div>
            <div className={style.card}>
              <img src="" alt="" className={style.img} />
              <h2 className={style.title}>45.5k</h2>
              <p className={style.text}>Customer active in our site</p>
            </div>
            <div className={style.card}>
              <img src="" alt="" className={style.img} />
              <h2 className={style.title}>25k</h2>
              <p className={style.text}>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default About