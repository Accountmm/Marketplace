import { useParams } from 'react-router-dom'
import MainLayout from '../../Layout/MainLayout'
import style from './Catalog.module.scss'
import Loading from '../../Components/Loaders/Loading'
import { IProduct } from '../../Types/ProductsType'
import Card from '../../Components/UI/Card/Card'
import CardLoader from '../../Components/Loaders/CardLoader'
import Title from '../../Components/UI/Title/Title'
import getSortProducts from '../../Services/getSortProducts'

const Catalog = () => {
  const { catalogid } = useParams()

  const { data, isLoading, isFetching } = getSortProducts({ catalog: catalogid || 0 })

  if (isFetching || isLoading) return <Loading />

  const catalogProductsArr: IProduct[] = data?.data

  const loaderArr = [...new Array(12)].map((_, i) => <CardLoader key={i} />)

  console.log(catalogProductsArr);

  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <Title title={catalogProductsArr[0].category.name || ''} text='Products by catalog' />
          <div className={style.catalog__box}>
            {
              catalogProductsArr
                ? catalogProductsArr.map(product => {
                  return <Card product={product} key={product.id} />
                })
                : loaderArr // loader
            }
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Catalog