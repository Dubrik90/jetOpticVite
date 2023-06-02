import React, { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"
import { SliderBonuseWrapper } from "./style"
import {Container} from "../../../common/style/global";

export const JetSliderReviews = () => {
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
      <SliderBonuseWrapper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
          // breakpoints={{
          //   320: {
          //     centeredSlides: true,
          //   },
          //   769: {
          //     centeredSlides: false,
          //   },
          // }}
        >
          {arr.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SliderBonuseWrapper>
    </Container>
  )
}
