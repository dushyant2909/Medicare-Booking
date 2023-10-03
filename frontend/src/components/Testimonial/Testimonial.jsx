import React from 'react'
import { Pagination, Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperSlideVisible from './SwiperSlideView'

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[40px] cursor-[grab] rounded-[20px]">
      <Swiper
        loop={true}
        freeMode={true}
        className='w-full'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}>
        <SwiperSlide>
          <SwiperSlideVisible name={"Dushyant Bhutiyani"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Ansh Agarwal"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Jainul Abdeen"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Dhairya Virmani"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Yash"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Puneet"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideVisible name={"Ashmit"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial