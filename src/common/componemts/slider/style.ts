import styled from "styled-components"

export const SwiperWrapper = styled.div`
  .swiper {
    padding-top: 30px;
    width: 100%;
    padding-bottom: 100px;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      padding-bottom: 50px;
    }

    .swiper-slide {
      max-width: 611px !important;
      // max-height: 424px;
      overflow: hidden;
      padding: 54px 31px;
      z-index: 1 !important;
      border: 2px solid #e4a135;
      border-radius: 20px;
      @media (max-width: 1920px) {
        padding: calc(20px + (54 - 20) * ((100vw - 390px) / (1920 - 390)))
          calc(20px + (31 - 20) * ((100vw - 390px) / (1920 - 390)));
      }

      h3 {
        font-family: "Mulish";
        font-weight: var(--fw-bold);
        font-size: 30px;
        text-align: center;
        line-height: 1.13;
        color: var(--color-withe);
        margin-bottom: 38px;
        @media (max-width: 1920px) {
          font-size: calc(14px + (30 - 14) * ((100vw - 390px) / (1920 - 390)));
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
        font-size: 26px;
        line-height: 1.14;
        color: var(--color-withe);
        margin-bottom: 30px;
        @media (max-width: 1920px) {
          font-size: calc(12px + (26 - 12) * ((100vw - 390px) / (1920 - 390)));
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
        font-size: 26px;
        line-height: 1.14;
        color: var(--color-withe);
        @media (max-width: 1920px) {
          font-size: calc(12px + (26 - 12) * ((100vw - 390px) / (1920 - 390)));
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
          width: calc(18px + (40 - 18) * ((100vw - 390px) / (1920 - 390)));
          height: calc(20px + (30 - 20) * ((100vw - 390px) / (1920 - 390)));
        }
      }
    }
    .swiper-slide-prev,
    .swiper-slide-next {
      transform: scale(0.8) !important;
    }
    .swiper-pagination-bullet {
      background: rgba(228, 161, 53, 0.7);
      width: 20px;
      height: 20px;
      @media (max-width: 768px) {
        width: 15px;
        height: 15px;
      }
    }
  }
`
export const PaginationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -50px;
  padding-bottom: 50px;
  z-index: 50;
  position: relative;
  svg {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: -40px;
    svg {
      width: 30px;
    }
  }
`
