import Path from '../../../Routes/Routes'
import { parfume, platstation, speaker, women } from '../../../Utils/Reexprot'
import Title from '../../UI/Title/Title'
import style from './Arrival.module.scss'
import Card from './Card'

const Arrival = () => {
  return (
    <section className='page'>
      <div className="container">
        <Title text='Featured' title='New Arrival' />
        <div className={style.arrival__box}>
          <Card to='/product/playstation' img={platstation} title='PlayStation 5' text='Black and White version of the PS5 coming out on sale.' />
          <Card to={`/${Path.catalog}/women`} img={women} title='Women’s Collections' text='Featured woman collections that give you another vibe.' />
          <Card to={`/${Path.catalog}/speaker`} img={speaker} title='Speakers' text='Amazon wireless speakers' />
          <Card to={`/${Path.catalog}/perfume`} img={parfume} title='Perfume' text='GUCCI INTENSE OUD EDP' />
        </div>
      </div>
    </section>
  )
}

export default Arrival