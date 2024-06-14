import { useParams } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import getProduct from "../../Services/getProduct";
import style from "./Product.module.scss";
import Loading from "../../Components/Loaders/Loading";
import { IProduct } from "../../Types/ProductsType";
import { car, delivry } from "../../Utils/Reexprot";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { slug } = useParams()

  const { data, isLoading, isFetching } = getProduct({ slug: slug || '' })

  const product: IProduct = data?.data

  if (isFetching || isLoading) return <MainLayout> <Loading /></MainLayout>


  return (
    <MainLayout>
      <section className='page'>
        <div className="container">
          <div className={style.product__box}>

            <div className={style.left}>
              <img src={product.image} alt="" className={style.img} />
            </div>

            <div className={style.right}>
              <h1 className={style.title}>{product.name}</h1>
              <p className={style.price}>${Math.round(+product.price)}</p>
              <p className={style.text}>{product.long_description}</p>
              <div className="divider"></div>

              <div className={style.info}>
                <div className={style.box}>
                  <img src={car} alt="" />
                  <div>
                    <h3 className={style.title}>Free Delivery</h3>
                    <p className={style.text}>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className={style.box}>
                  <img src={delivry} alt="" />
                  <div>
                    <h3 className={style.title}>Return Delivery</h3>
                    <p className={style.text}>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <RelatedProducts category={product.category.name} />
        </div>
      </section>
    </MainLayout>
  )
}

export default Product