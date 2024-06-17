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
            <img className={style.img} src={girls} alt="" fetchPriority='high' />
          </div>

        </div>
      </section>
    </MainLayout>
  )
}

export default About