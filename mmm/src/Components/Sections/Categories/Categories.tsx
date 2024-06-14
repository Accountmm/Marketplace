import { nanoid } from 'nanoid'
import Title from '../../UI/Title/Title'
import style from './Catalogs.module.scss'
import { Camera, Computers, Gaming, HeadPhones, Phones, SmartWatch } from '../../../Utils/Reexprot'
import { Link } from 'react-router-dom'
const categoriesArr = [
  {
    key: nanoid(),
    icon: Phones,
    text: 'Phones',
  },
  {
    key: nanoid(),
    icon: Computers,
    text: 'Computers',
  },
  {
    key: nanoid(),
    icon: SmartWatch,
    text: 'SmartWatch',
  },
  {
    key: nanoid(),
    icon: Camera,
    text: 'Camera',
  },
  {
    key: nanoid(),
    icon: HeadPhones,
    text: 'HeadPhones',
  },
  {
    key: nanoid(),
    icon: Gaming,
    text: 'Gaming',
  },
]
const Categories = () => {
  return (
    <section className='page small'>
      <div className="container">
        <Title text='Categories' title='Browse By Category' />
        <div className={style.catalogs__box}>
          {
            categoriesArr.map(catalog => (
              <Link className={style.card} key={catalog.key} to={`/catalog/${catalog.text.toLowerCase()}`} >
                <img className={style.icon} src={catalog.icon} alt="" />
                <span className={style.text}>{catalog.text}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </section >
  )
}

export default Categories