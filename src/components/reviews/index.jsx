import React from 'react'
import c from './reviews.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation"; 
import { slidelist } from '../../utils';
import Slide from './slide';

const Reviews = () => {
  return (
    <section className={c.reviews_container}>
      <div className={c.reviews}>
        <Swiper
          slidesPerView={1}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className={c.my_swiper}
        >
          {
            slidelist.map(item => (
              <SwiperSlide key={item.id}>
                <Slide {...item}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className={c.phone}>
          <img src="https://m-files.cdnvideo.ru/lpfile/d/8/b/d8bb76e971b6d14840fda5c6c50c7d04.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Reviews