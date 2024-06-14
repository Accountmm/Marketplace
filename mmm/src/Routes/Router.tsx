import { createBrowserRouter } from "react-router-dom";
import Path from "./Routes";
import MainPage from "../Pages/MainPage/MainPage";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/Login/LogIn";
import PrivateRouter from "../Components/HOC/PrivateRouter";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";
import Error from "../Pages/Error/Error";
import Contact from "../Pages/Contact/Contact";
import ChangeAccount from "../Pages/ManageAccount/ChangeAccount";
import Catalog from "../Pages/Catalog/Catalog";
import Account from "../Pages/Account/Account";
import AddProduct from "../Pages/AddProduct/AddProduct";

export const router = createBrowserRouter([
  {
    path: Path.mainPage,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  },
  {
    path: Path.product,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Product />
      }
    ]
  },
  {
    path: Path.products,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Products />
      }
    ]
  },
  {
    path: Path.catalog,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Catalog />
      }
    ]
  },
  {
    path: Path.contact,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Contact />
      }
    ]
  },
  {
    path: Path.about,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <About />
      }
    ]
  },
  {
    path: Path.cart,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Cart />
      }
    ]
  },
  {
    path: Path.edditaccount,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <ChangeAccount />
      }
    ]
  },
  {
    path: Path.account,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <Account />
      }
    ]
  },
  {
    path: Path.addProduct,
    element: <PrivateRouter />,
    children: [
      {
        index: true,
        element: <AddProduct />
      }
    ]
  },
  {
    path: Path.error,
    element: <Error />,
  },
  {
    path: Path.login,
    element: <LogIn />,
  },
  {
    path: Path.signUp,
    element: <SignUp />,
  },
])
