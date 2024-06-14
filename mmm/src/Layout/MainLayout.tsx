import { FC, ReactNode } from 'react'
import Nav from '../Components/Business/Nav/Nav'
import Footer from '../Components/Business/Footer/Footer'

interface IParams {
  children: ReactNode
}
const MainLayout: FC<IParams> = ({ children }) => {
  return (
    <>
      <main className="main">
        <Nav />
        <header>
          {children}
          <Footer />
        </header>
      </main>
    </>
  )
}

export default MainLayout