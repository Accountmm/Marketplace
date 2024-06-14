import { useDispatch } from 'react-redux'
import getProducts from '../../../Services/getProducts'
import Title from '../../UI/Title/Title'
import { changeEror } from '../../../Redux/Products'
import { useEffect } from 'react'
import CardLoader from '../../Loaders/CardLoader'
import { IProduct } from '../../../Types/ProductsType'
import Card from '../../UI/Card/Card'
import CustomBtn from '../../UI/CustomBtn/CustomBtn'
import { useNavigate } from 'react-router-dom'
import Path from '../../../Routes/Routes'
// import style from './ExplorePR.module.scss'
const ExploreProducts = () => {
  const naviagte = useNavigate()
  function NavigateTo() {
    naviagte(Path.products)
  }
  const { data, isError } = getProducts()
  const dispatch = useDispatch()
  useEffect(() => {
    if (isError) {
      dispatch(changeEror())
    }
  }, [isError])
  const loader = [... new Array(8)].map((_, i) => <CardLoader key={i} />)
  const productsArr: IProduct[] = data?.data.slice(5, 9)
  return (
    <section className='page'>
      <div className="container">
        <Title text='Our Products' title='Explore Our Products' />

        <div className={`products`}>
          {
            productsArr
              ? productsArr.map(product => (
                <Card key={product.id} product={product} />
              ))
              : loader // loader
          }
        </div>
        <CustomBtn mt={60} text='View All Products' width={234} height={56} fn={NavigateTo} mrl='auto' />
      </div>
    </section>
  )
}

export default ExploreProducts