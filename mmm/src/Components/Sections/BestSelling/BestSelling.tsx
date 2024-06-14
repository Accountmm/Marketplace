import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../../../Services/getProducts'
import CustomBtn from '../../UI/CustomBtn/CustomBtn'
import Title from '../../UI/Title/Title'
import style from './BestSelling.module.scss'
import { changeProducts } from '../../../Redux/Products'
import { useEffect } from 'react'
import { IProducts } from '../../../Types/ReduxStore'
import Card from '../../UI/Card/Card'
import CardLoader from '../../Loaders/CardLoader'
import { useNavigate } from 'react-router-dom'
import Path from '../../../Routes/Routes'

const BestSelling = () => {
  const naviagte = useNavigate()
  function NavigateTo() {
    naviagte(Path.products)
  }
  const { data } = getProducts()
  const dispatch = useDispatch()
  const productsArr = useSelector((state: { products: IProducts }) => state.products.products).slice(0, 4)
  useEffect(() => {
    if (data?.data) {
      dispatch(changeProducts(data?.data))
    }
  }, [data])
  const loader = [...new Array(4)].map((_, i) => <CardLoader key={i} />)
  return (
    <section className='page'>
      <div className="container">
        <div className={style.info}>
          <Title text='This Month' title='Best Selling Products' />
          <CustomBtn text='View All' fn={NavigateTo} height={50} width={159} />
        </div>
        <div className='products'>
          {
            productsArr.length
              ? productsArr.map(product => (
                <Card key={product.id} product={product} />
              ))
              : loader // loader
          }
        </div>
      </div>
    </section>
  )
}

export default BestSelling