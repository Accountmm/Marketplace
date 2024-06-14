import { FC, ReactNode } from 'react'
import Footer from '../Components/Business/Footer/Footer'
import Nav from '../Components/Business/Nav/Nav'
import { registerImg } from '../Utils/Reexprot'
interface IParams {
  children: ReactNode
}
const RegisterLayout: FC<IParams> = ({ children }) => {
  return (
    <main className="main">
      <Nav />
      <header>
        <section className='page auth'>
          <img className='auth__img' src={registerImg} alt="" />
          {children}
        </section>
      </header>
      <Footer />
    </main>
  )
}

export default RegisterLayout