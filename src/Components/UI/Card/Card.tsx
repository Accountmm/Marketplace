import { FC } from 'react'
import style from './Card.module.scss'
import { IProduct } from '../../../Types/ProductsType'
import { CiHeart } from 'react-icons/ci'
import { IAddCart, useAddCartMuation } from '../../../Services/CartMutation';
import getProductsCart from '../../../Services/getCart';
import { useDispatch } from 'react-redux';
import { changeCart } from '../../../Redux/Products';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";

interface IParams {
  product: IProduct
  fn?: (data: IAddCart) => void
}
const Card: FC<IParams> = ({ product, fn }) => {
  const dispathch = useDispatch()

  const usemutationAddProdutcs = useAddCartMuation()

  const obj = getProductsCart()

  const navgate = useNavigate()
  const addToCartFn = (data: IAddCart) => {
    usemutationAddProdutcs.mutateAsync(data)
    dispathch(changeCart(obj.data?.data))
  }
  const actualPrice = Math.round(+product.price - +product.price / 100 * product.discount)
  return (
    <div className={style.card} onClick={() => {
      fn ? fn({ product: product.id || 0 }) : false
    }}>      <div className={style.box}>
        <img src={`${product.image}`} alt="" className={style.img} />
        <button onClick={() => addToCartFn({ product: product.id || 0, quontity: 1 })} className={style.btn}>Add To Cart</button>
      </div>
      <p className={style.discount}>{product.discount}%</p>
      <div className={style.btns}>
        <button className={style.btn}><CiHeart /></button>
        <button onClick={() => navgate(`/product/${product.slug.toLocaleLowerCase()}`)} className={style.btn}><IoEyeOutline /></button>
      </div>
      <div className={style.info}>
        <h3 className={style.title}>{product.name}</h3>
        <span className={style.price}>{actualPrice}</span>
        <span className={style.price}>{product.price}</span>
      </div>

    </div>
  )
}

export default Card