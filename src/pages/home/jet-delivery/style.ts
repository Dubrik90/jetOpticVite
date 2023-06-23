import styled from "styled-components"
import { TitleGL } from "../../../common/style/global"

export const JetDeliveryWrapper = styled.div`
  padding-bottom: 100px;
  @media (max-width: 1920px) {
    padding-bottom: calc(30px + (100 - 30) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const ImgWrap = styled.div`
  width: 100%;
  max-height: 800px;
  @media (max-width: 500px) {
    height: 215px;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 700px;
    object-fit: cover;
    object-position: top;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 90px;
  padding-right: 40px;
  @media (max-width: 1920px) {
    column-gap: calc(60px + (90 - 60) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 500px) {
    padding-right: 0;
    position: relative;
  }
`
export const SubTitle = styled.button.attrs({
  type: "button",
})`
 
`
export const TitleDelivery = styled(TitleGL)`
  @media (max-width: 500px) {
    color: var(--color-dark);
  }
`
export const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  max-width: 840px;
  @media (max-width: 500px) {
    position: absolute;
    bottom: 10px;
    right: 10px;
    max-width: 267px;
  }
`
export const ButtonBlock = styled.div`
  position: relative;
  z-index: 5;
  
  a {
    display: flex;
    align-items: center;
    column-gap: 25px;
    transition: color 0.3s;
    color: var(--color-withe);
    font-family: "Mulish";
    font-weight: var(--fw-bold);
    font-size: 36px;
    line-height: 1.13;
    @media (max-width: 1920px) {
      font-size: calc(14px + (36 - 14) * ((100vw - 390px) / (1920 - 390)));
    }
    @media (max-width: 500px) {
      color: var(--color-dark);
    }
  }
  
  @media (min-width: 501px) {
    a:hover {
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
      width: calc(30px + (50 - 30) * ((100vw - 390px) / (1920 - 390)));
      height: calc(20px + (40 - 20) * ((100vw - 390px) / (1920 - 390)));
    }
    @media (max-width: 500px) {
        path {
          fill: var(--color-dark);
        }
  }
`
