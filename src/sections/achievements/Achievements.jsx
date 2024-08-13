import './achievements.css'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import achievements from './data'
import Achievement from './Achievement'

const Achievements = () => {
  return (
    <section id="achievements">
      <h2>My Achievements</h2>
      <p></p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 1},
          1025: {slidesPerView: 2}
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        autoplay={true}
        className="mySwiper">
          {
            achievements.map(achievement => (
              <SwiperSlide key={achievement.id} >
                <Achievement achievement={achievement} />
              </SwiperSlide>
            ))
          }

      </Swiper>
      </div>
    </section>
  )
}

export default Achievements