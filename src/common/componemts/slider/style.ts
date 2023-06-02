import styled from "styled-components"

export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;

    .swiper-slide {
      max-width: 611px !important;
      // max-height: 424px;
      overflow: hidden;
      padding: 54px 31px;
      border: 2px solid #e4a135;
      border-radius: 20px;
      @media (max-width: 1920px) {
        padding: calc(20px + (54 - 20) * ((100vw - 390px) / (1920 - 390)))
        calc(20px + (31 - 20) * ((100vw - 390px) / (1920 - 390)));
      }

      h3 {
        font-family: "Mulish";
        font-weight: var(--fw-bold);
        font-size: 40px;
        text-align: center;
        line-height: 1.13;
        color: var(--color-withe);
        margin-bottom: 38px;
        @media (max-width: 1920px) {
          font-size: calc(14px + (40 - 14) * ((100vw - 390px) / (1920 - 390)));
          margin-bottom: calc(
            7px + (38 - 7) * ((100vw - 768px) / (1920 - 768))
          );
        }
        @media (max-width: 767px) {
          margin-bottom: 16px;
        }
      }
      p {
        font-family: "Mulish";
        font-size: 32px;
        line-height: 1.14;
        color: var(--color-withe);
        margin-bottom: 30px;
        @media (max-width: 1920px) {
          font-size: calc(12px + (32 - 12) * ((100vw - 390px) / (1920 - 390)));
        }
        @media (max-width: 767px) {
          margin-bottom: 25px;
        }
      }
      a {
        display: flex;
        align-items: center;
        column-gap: 25px;
        transition: color 0.3s;
        font-family: "Mulish";
        font-size: 32px;
        line-height: 1.14;
        color: var(--color-withe);
        @media (max-width: 1920px) {
          font-size: calc(12px + (32 - 12) * ((100vw - 390px) / (1920 - 390)));
          column-gap: calc(18px + (25 - 18) * ((100vw - 390px) / (1920 - 390)));
          
        }
        @media (min-width: 501px) {
          :hover {
            color: var(--color-ogange);
            svg {
              transform: translateX(5px);
              
              path {
                fill: var(--color-ogange);
              }
            }
          }
        }
      }

      @media (max-width: 1920px) {
        column-gap: calc(15px + (25 - 15) * ((100vw - 390px) / (1920 - 390)));
      }

      svg {
        transition: all 0.3s;
        path {
          transition: fill 0.3s;
        }
        @media (max-width: 1920px) {
          width: calc(18px + (50 - 18) * ((100vw - 390px) / (1920 - 390)));
          height: calc(20px + (40 - 20) * ((100vw - 390px) / (1920 - 390)));
        }
        @media (max-width: 500px) {
          path {
            fill: var(--color-dark);
          }
        }
      }
    }
    .swiper-slide-prev,
    .swiper-slide-next {
      transform: scale(0.8) !important;
    }
  }
`
