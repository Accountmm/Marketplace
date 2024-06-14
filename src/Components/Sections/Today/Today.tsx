import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../../../Services/getProducts'
import Timer from '../../UI/Timer/Timer'
import Title from '../../UI/Title/Title'
import style from './Today.module.scss'
import { changeEror, changeProducts } from '../../../Redux/Products'
import Card from '../../UI/Card/Card'
import { useEffect } from 'react'
import { IProducts } from '../../../Types/ReduxStore'
import CardLoader from '../../Loaders/CardLoader'
import CustomBtn from '../../UI/CustomBtn/CustomBtn'
import { useNavigate } from 'react-router-dom'
import Path from '../../../Routes/Routes'


const Today = () => {
  const loader = [...new Array(4)].map((_, i) => <CardLoader key={i} />)

  const { data, isError } = getProducts()
  const productsArr = useSelector((state: { products: IProducts }) => state.products.products).slice(0, 4)

  const dispatch = useDispatch()
  if (isError) {
    dispatch(changeEror())
  }
  useEffect(() => {
    if (data?.data.length) {
      dispatch(changeProducts(data?.data))
    }

  }, [data])

  const naviagte = useNavigate()
  function NavigateTo() {
    naviagte(Path.products)
  }

  return (
    <section className='page'>
      <div className="container">
        <div className={style.today__box}>
          <div className={style.info}>
            <Title text='Today’s' title='Flash Sales' />
            <Timer />
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
        <CustomBtn height={56} width={234} fn={NavigateTo} text='View All Products' mrl='auto' mt={60} />
      </div>
    </section>
  )
}

export default Today