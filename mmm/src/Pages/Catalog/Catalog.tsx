import { useParams } from 'react-router-dom'
import MainLayout from '../../Layout/MainLayout'
import style from './Catalog.module.scss'
import getCatalog from '../../Services/getCatalog'
import Loading from '../../Components/Loaders/Loading'
import { IProduct } from '../../Types/ProductsType'
import Card from '../../Components/UI/Card/Card'
import CardLoader from '../../Components/Loaders/CardLoader'
import Title from '../../Components/UI/Title/Title'

const Catalog = () => {
  const { catalogname } = useParams()
  const { data, isLoading, isFetching } = getCatalog({ catalog: catalogname || '' })

  if (isFetching || isLoading) return <Loading />

  const catalogProductsArr: IProduct[] = data?.data

  const loaderArr = [...new Array(12)].map((_, i) => <CardLoader key={i} />)

  console.log(catalogProductsArr);

  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <Title title={catalogname || ''} text='Products by catalog' />
          <div className={style.catalog__box}>
            {
              catalogProductsArr.length
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