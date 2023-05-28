import React from "react"
import {
  ButtonBlock,
  Content,
  DeliveryBlock,
  ImgWrap,
  JetDeliveryWrapper,
  SubTitle,
} from "./style"
import { Container, TitleGL } from "../../../common/style/global"
import DiverlyImg from "../assets/diverly-img.png"
import Arrow from "../assets/Arrow.svg"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"

export const JetDelivery = () => {
  return (
    <JetDeliveryWrapper>
      <Content>
        <ImgWrap>
          <img src={DiverlyImg} alt="diverly image" loading={"lazy"} />
        </ImgWrap>
        <DeliveryBlock>
          <TitleGL>Доставим в любой регион РФ и страны СНГ</TitleGL>
          <ButtonBlock>
            <SubTitle>Узнать больше</SubTitle>
            <SvgComponent src={Arrow} width={"50px"} height={"40px"} />
          </ButtonBlock>
        </DeliveryBlock>
      </Content>
      <Container></Container>
    </JetDeliveryWrapper>
  )
}
