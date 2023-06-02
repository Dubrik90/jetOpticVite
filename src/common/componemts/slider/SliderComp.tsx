import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

//import "./style.css"

// import required modules
// @ts-ignore
import { EffectCoverflow, Navigation, Pagination } from "swiper"
import { PaginationBlock, SwiperWrapper } from "./style"
import { Container } from "../../style/global"
import { SupplierTitle } from "../../../pages/home/jet-official-supplier/style"

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
      <SupplierTitle>Отзывы</SupplierTitle>
      <SwiperWrapper>
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            //slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              centeredSlides: false,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 1,
                //slideShadows: true,
              },
            },
            768: {
              slidesPerView: 3,
              centeredSlides: true,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                //slideShadows: true,
              },
            },
          }}
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
        <PaginationBlock>
          <svg
            className={"prev"}
            width="53"
            height="38"
            viewBox="0 0 53 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM53 16.5L3 16.5V21.5L53 21.5V16.5Z"
              fill="#E4A135"
            />
          </svg>
          <svg
            className={"next"}
            width="53"
            height="38"
            viewBox="0 0 53 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.7678 20.7678C52.7441 19.7915 52.7441 18.2085 51.7678 17.2322L35.8579 1.32233C34.8816 0.346023 33.2986 0.346023 32.3223 1.32233C31.346 2.29864 31.346 3.88156 32.3223 4.85787L46.4645 19L32.3223 33.1421C31.346 34.1184 31.346 35.7014 32.3223 36.6777C33.2986 37.654 34.8816 37.654 35.8579 36.6777L51.7678 20.7678ZM-2.18557e-07 21.5L50 21.5L50 16.5L2.18557e-07 16.5L-2.18557e-07 21.5Z"
              fill="#E4A135"
            />
          </svg>
        </PaginationBlock>
      </SwiperWrapper>
    </Container>
  )
}
