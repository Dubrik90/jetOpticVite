import styled from "styled-components"

export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .swiper-slide {
      max-width: 611px;
      // max-height: 424px;
      overflow: hidden;
      padding: 54px 31px;
      border: 2px solid #e4a135;
      border-radius: 20px;

      h3 {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;

        color: #ffffff;
        margin-bottom: 38px;
      }
      p {
        font-family: "Mulish";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;

        color: #ffffff;
      }
    }
  }
`
