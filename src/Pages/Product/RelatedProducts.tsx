import CardLoader from '../../Components/Loaders/CardLoader'
import Card from '../../Components/UI/Card/Card'
import Title from '../../Components/UI/Title/Title'
import getSortProducts from '../../Services/getSortProducts'
import { IProduct } from '../../Types/ProductsType'
import style from './Product.module.scss'

const RelatedProducts = ({ category }: { category: number }) => {

  const { data } = getSortProducts({ catalog: category })

  const productsArr: IProduct[] = data?.data
  const loaderArr = [...new Array(4)].map((_, i) => <CardLoader key={i} />)
  return (
    <>
      <section className={style.related}>
        <Title text='Related' />

        <div className={style.related__products}>
          {
            productsArr
              ? productsArr.map(product => (
                <Card product={product} key={product.id} />
              ))
              : loaderArr
          }
        </div>
      </section>
    </>
  )
}

export default RelatedProducts