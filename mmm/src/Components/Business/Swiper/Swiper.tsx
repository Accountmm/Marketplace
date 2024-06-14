import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { FC } from 'react';
import getCatalogs from '../../../Services/getCategorys';
import { ICatalog } from '../../../Types/CatalogType';
import IntroLoader from '../../Loaders/IntroLoader';
interface IParams {
  section?: boolean
}
const Slider: FC<IParams> = ({ section }) => {
  const { data } = getCatalogs()
  const catalogArr: ICatalog[] = data?.data

  return (
    <Swiper
      spaceBetween={30}
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className={`swipper ${section && `section`}`}
    >
      {
        catalogArr
          ? catalogArr.map(el => (
            <SwiperSlide key={el.id} className='swipper__slide'>
              <img src={el.image} alt="" />
              <div className="swipper__slide__info">
                <h1 className="swipper__slide__info_title">{el.title}</h1>
                <p className="swipper__slide__info_text">{el.description}</p>
              </div>
            </SwiperSlide>
          ))
          : <SwiperSlide> <IntroLoader /></SwiperSlide>
      }

    </Swiper>
  )
}

export default Slider