import { useNavigate } from 'react-router-dom'
import MainLayout from '../../Layout/MainLayout'
import Card from './Card'
import style from './Cart.module.scss'
import Path from '../../Routes/Routes'
import CustomBtn from '../../Components/UI/CustomBtn/CustomBtn'
import { useEffect, useState } from 'react'
import getProductsCart from '../../Services/getCart'
import { useDispatch, useSelector } from 'react-redux'
import { changeCart } from '../../Redux/Products'
import { IProducts } from '../../Types/ReduxStore'
import { useDelCartMutation } from '../../Services/CartMutation'
import { TbGardenCartOff } from "react-icons/tb";
import Loading from '../../Components/Loaders/Loading'

const Cart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(false)
  const [active, setActive] = useState<boolean>(false)
  const [isAnsewYes, setIsAnsewYes] = useState<boolean>(false)

  const { data } = getProductsCart()

  const cartArr = useSelector((state: { products: IProducts }) => state.products.cart)
  const dispatch = useDispatch()


  const useDelCart = useDelCartMutation()
  const navigate = useNavigate()


  useEffect(() => {
    if (data?.data) {
      dispatch(changeCart(data?.data))
    }
    if (isAnsewYes) {
      useDelCart.mutateAsync()
      setActive(false)
    }
    if (!isCartEmpty) {
      setTimeout(() => {
        setIsCartEmpty(true)
      }, 1500);
    }
  }, [data, isAnsewYes, cartArr])

  function delAllProducts() {
    setActive(true)
  }
  let totalProductsPrice = 0
  if (cartArr.length) {
    for (let i = 0; i < cartArr.length; i++) {
      totalProductsPrice += cartArr[i].quantity * +cartArr[i].price
    }
  }


  return (
    <>
      <MainLayout>
        {
          cartArr.length
            ?
            <>
              <div className={`window_bg ${active && `active`}`}>
                <div className={`window `}>
                  <h1 className="window__title">Do you want to delete? </h1>
                  <div className="window__btns">
                    <button onClick={() => setIsAnsewYes(true)} className="btn">Yes</button>
                    <button onClick={() => setActive(false)} className="btn">No</button>
                  </div>
                </div>
              </div>

              <section className='page'>
                <div className="container">
                  <div className={style.products}>
                    <Card title='Product' price='Price' quontity={'Quantity'} total={'Subtotal'} />

                    {
                      cartArr
                        ? cartArr.map(el => {
                          return <Card price={el.price} quontity={el.quantity} title={el.name} total={el.quantity * +el.price} img={el.image} key={el.price} />
                        })
                        : false
                    }

                    <div className={style.btns}>
                      <button onClick={() => navigate(Path.products)} className={style.btn}>Return To Shop</button>
                      <button onClick={() => delAllProducts()} className={style.btn}>Delete all</button>
                    </div>
                  </div>
                  <div className={style.total}>
                    <h1 className={style.title}>Cart Total</h1>
                    <div className={style.info}>
                      <p className={style.text}>Subtotal:</p>
                      <p className={style.text}>${Math.ceil(totalProductsPrice)}</p>
                    </div>

                    <div className="divider"></div>

                    <div className={style.info}>
                      <p className={style.text}>Shipping:</p>
                      <p className={style.text}>Free</p>
                    </div>
                    <CustomBtn width={'100%'} text='Procees to checkout' height={50} />
                  </div>
                </div>
              </section>
            </>
            : isCartEmpty
              ? <section className={style.empty}>
                <h1 className={style.title}>Cart is empty</h1>
                <span className={style.icon}><TbGardenCartOff /></span>
              </section>
              : <Loading />
        }
      </MainLayout>
    </>
  )
}

export default Cart