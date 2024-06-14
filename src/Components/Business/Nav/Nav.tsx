
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Path from '../../../Routes/Routes'
import style from './Nav.module.scss'
import { nanoid } from 'nanoid'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FormEvent, useState } from 'react';
import { ManageAccount, account, accountWhite, logout } from '../../../Utils/Reexprot';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValue } from '../../../Redux/Products';
import { IProducts } from '../../../Types/ReduxStore';

export const naviagtion = [
  {
    id: nanoid(),
    text: 'Home',
    navigateTo: Path.mainPage
  },
  {
    id: nanoid(),
    text: 'Contact',
    navigateTo: Path.contact
  },
  {
    id: nanoid(),
    text: 'About',
    navigateTo: Path.about,
  },
]

const Nav = () => {

  const [isAccoutActive, setIsAccoutActive] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch()

  const navigate = useNavigate()
  function logOut() {
    navigate(Path.signUp)
    localStorage.removeItem('access__token')
    localStorage.removeItem('refresh__token')
  }
  const cartArrLength = useSelector((state: { products: IProducts }) => state.products.cart).length

  function searchProducts(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate(Path.products)
    dispatch(changeSearchValue(searchValue))
    setSearchValue('')
    console.log(searchValue);

  }

  return (
    <section className={style.nav}>
      <div className="container">
        <div className={style.nav__box}>
          <Link to={Path.mainPage}>
            <h1 className={style.logo}>Exclusive</h1>
          </Link>

          <ul className={style.list}>
            {
              naviagtion.map(el => (
                <NavLink key={el.id} to={el.navigateTo} className='link'>
                  <li>
                    {el.text}
                  </li>
                </NavLink>
              ))
            }
          </ul>

          <div className={style.right}>

            <form action="" className={style.form} onSubmit={(e) => searchProducts(e)}>

              <input
                type="text"
                className={style.form__input}
                placeholder='What are you looking for?'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <button className={style.form__btn}><CiSearch /></button>

            </form>

            <Link to={Path.cart} className={`nav__link `}>
              <span className={`nav__link_text ${cartArrLength && `active`}`}>{cartArrLength}</span>
              <CiShoppingCart />
            </Link>

            <button onClick={() => setIsAccoutActive((state) => !state)} className={`nav__btn ${isAccoutActive && 'active'}`}>
              {

                isAccoutActive
                  ? <img src={accountWhite} alt="" />
                  : <img src={account} alt="" />

              }
            </button>
          </div>

        </div>
      </div>
      <div className={`nav__list ${isAccoutActive && 'active'}`}>
        <div className="nav__list__btn" onClick={() => navigate(Path.account)}>
          <img src={ManageAccount} alt="" />
          <span>Manage</span>
        </div>
        <div className="nav__list__btn" onClick={logOut}>
          <img src={logout} alt="" />
          <span>Logout</span>
        </div>
      </div>
    </section>
  )
}

export default Nav