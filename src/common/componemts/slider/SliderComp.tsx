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
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            //slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {arr.map((img, idx) => (
            <SwiperSlide key={idx}>
              <h3>{img.title}</h3>
              <p>{img.text}</p>
              <a target={"_blank"} href="https://ya.ru/">
                Читать полностью
                <svg
                  width="52"
                  height="24"
                  viewBox="0 0 52 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Container>
  )
}
