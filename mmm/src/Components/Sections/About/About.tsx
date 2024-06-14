import { card_1, card_2, card_3 } from '../../../Utils/Reexprot'
import style from './About.module.scss'
import Card from './Card'

const About = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__box}>
          <Card img={card_1} title='FREE AND FAST DELIVERY' text='Free delivery for all orders over $140' />
          <Card img={card_2} title='24/7 CUSTOMER SERVICE' text='Friendly 24/7 customer support' />
          <Card img={card_3} title='MONEY BACK GUARANTEE' text='We reurn money within 30 days' />

        </div>
      </div>
    </section>
  )
}

export default About