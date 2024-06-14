import MainLayout from "../../Layout/MainLayout"
import Intro from "../../Components/Sections/Intro/Intro";
import style from "./MainPage.module.scss";
import Today from "../../Components/Sections/Today/Today";
import BestSelling from "../../Components/Sections/BestSelling/BestSelling";
import ExploreProducts from "../../Components/Sections/ExploreProucts/ExploreProducts";
import Arrival from "../../Components/Sections/Arrival/Arrival";
import About from "../../Components/Sections/About/About";
const MainPage = () => {

  return (
    <MainLayout>
      <main className={style.main}>
        <Intro />
        <Today />
        <BestSelling />
        <ExploreProducts />
        <Arrival />
        <About />
      </main>
    </MainLayout>
  )
}

export default MainPage