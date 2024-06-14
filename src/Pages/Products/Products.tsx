import MainLayout from '../../Layout/MainLayout'
import style from './Products.module.scss'
import Card from '../../Components/UI/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { IProducts } from '../../Types/ReduxStore'
import { useEffect } from 'react'
import { changeIsLoading, changeProducts, changeSortValue } from '../../Redux/Products'
import CustomSelect from '../../Components/UI/CustomSelect/CustomSelect'
import getProducts from '../../Services/getProducts'
import { IProduct } from '../../Types/ProductsType'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { useNavigate } from 'react-router-dom'
import Path from '../../Routes/Routes'
import CardLoader from '../../Components/Loaders/CardLoader'

const Products = () => {
  const searchValue = useSelector((state: { products: IProducts }) => state.products.searchValue)
  const productsArr = useSelector((state: { products: IProducts }) => state.products.products)
  const isLoading = useSelector((state: { products: IProducts }) => state.products.isLoading)

  const { data } = getProducts()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    // const filteredProductsArr =
    //   productsArr
    //     ? productsArr.filter(product => {
    //       return product.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    //     })
    //     : productsArr
    if (data) {
      dispatch(changeProducts(data?.data))
    }
  }, [searchValue])

  const loaderArr = [...new Array(9)].map((_, i) => <CardLoader key={i} />)

  const selectOptions = [
    { value: '-price', label: 'Price hight' },
    { value: 'price', label: 'Price low' },
    { value: 'name', label: 'Name' },
  ]

  function navagetToAddProduct() {
    navigate(Path.addProduct)
  }
  function toggleSortChange(data: { label: string, value: string }) {
    dispatch(changeSortValue(data.value))
    dispatch(changeIsLoading(true))
    setTimeout(() => {
      dispatch(changeIsLoading(false))
    }, 500);
  }

  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <div className={style.navigation}>
            <CustomSelect options={selectOptions} fn={toggleSortChange} />
            <CustomBtn fn={navagetToAddProduct} height={35} width={200} text='Add products' />
          </div>

          <div className={style.products__box}>

            {
              productsArr.length
                ? productsArr.map((el: IProduct) => (
                  <Card product={el} />
                ))
                : isLoading || !productsArr.length
                  ? loaderArr
                  : false
            }
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Products