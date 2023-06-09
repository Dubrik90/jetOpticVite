import React from "react"
import {
  ButtonBlock,
  Content,
  DeliveryBlock,
  ImgWrap,
  JetDeliveryWrapper,
  SubTitle,
  TitleDelivery,
} from "./style"
import { Container } from "../../../common/style/global"
import DiverlyImg from "../assets/diverly-img.webp"
import { Link } from "react-router-dom"
import { ROUTS } from "../../../common/constans/routs"

export const JetDelivery = () => {
  return (
    <JetDeliveryWrapper>
      <Content>
        <ImgWrap>
          <img src={DiverlyImg} alt="diverly image" loading={"lazy"} />
        </ImgWrap>
        <DeliveryBlock>
          <TitleDelivery>Доставим в любой регион РФ и страны СНГ</TitleDelivery>
          <ButtonBlock>
            <Link to={ROUTS.FEEDBACK}>
              Узнать больше
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
            </Link>

            {/*<SvgComponent src={Arrow} width={"50px"} height={"40px"} />*/}
          </ButtonBlock>
        </DeliveryBlock>
      </Content>
      <Container></Container>
    </JetDeliveryWrapper>
  )
}
