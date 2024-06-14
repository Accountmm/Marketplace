import { FC, useEffect } from 'react';
import style from './CustomSelect.module.scss'
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { IProducts } from '../../../Types/ReduxStore';
import getSortProducts from '../../../Services/getSortProducts';
import { changeProducts } from '../../../Redux/Products';
interface IOptions {
  value: string,
  label: string
}
interface IParams {
  options?: IOptions[]
  fn?: (obj: any) => void
}
const CustomSelect: FC<IParams> = ({ options, fn }) => {
  const sortValue = useSelector((state: { products: IProducts }) => state.products.sortValue)
  const dispatch = useDispatch()

  const { data } = getSortProducts({ sort: sortValue })

  useEffect(() => {
    if (data) {
      dispatch(changeProducts(data?.data))
    }
  }, [data])

  return (
    <Select
      onChange={fn}
      className={style.select}
      options={options}
    />
  )
}

export default CustomSelect