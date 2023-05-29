import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

//import "./style.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"
import { SwiperWrapper } from "./style"
import { Container } from "../../style/global"

export const SliderComp = () => {
  const arr = [
    {
      title: "1 Салон красоты “Айрис” ",
      text: "Хотелось  поблагодарить и отметить профессиональную, качественную работу. Наглядно всё показали и рассказали...",
    },
    {
      title: "2 Салон красоты “Айрис” ",
      text: "Хотелось  поблагодарить и отметить профессиональную, качественную работу. Наглядно всё показали и рассказали...",
    },
    {
      title: "3 Салон красоты “Айрис” ",
      text: "Хотелось  поблагодарить и отметить профессиональную, качественную работу. Наглядно всё показали и рассказали...",
    },
    {
      title: "4 Салон красоты “Айрис” ",
      text: "Хотелось  поблагодарить и отметить профессиональную, качественную работу. Наглядно всё показали и рассказали...",
    },
    {
      title: "5 Салон красоты “Айрис” ",
      text: "Хотелось  поблагодарить и отметить профессиональную, качественную работу. Наглядно всё показали и рассказали...",
    },
  ]

  return (
    <Container>
      <SwiperWrapper>
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {arr.map((img, idx) => (
            <SwiperSlide key={idx}>
              <h3>{img.title}</h3>
              <p>{img.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Container>
  )
}
