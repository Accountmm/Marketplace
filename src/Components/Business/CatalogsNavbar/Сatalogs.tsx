import { Link } from 'react-router-dom';
import getCatalogs from '../../../Services/getCategorys'
import { ICatalog } from '../../../Types/CatalogType';
import style from "./Catalogs.module.scss";
import CatalogLoader from '../../Loaders/CatalogLoader';
const Catalogs = () => {
  const { data } = getCatalogs()
  const catalogsArr: ICatalog[] = data?.data
  const loader = [...new Array(10)].map((_, i) => <CatalogLoader key={i} />)

  return (
    <ul className={style.catalogs}>
      {
        catalogsArr
          ? catalogsArr.map(el => (
            <Link key={el.id} to={`/catalog/${el.id}`} className={style.catalog}>{el.name}</Link>
          ))
          : loader
      }
    </ul>
  )
}

export default Catalogs