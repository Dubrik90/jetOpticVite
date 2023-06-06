import React from "react"
import {
  ChillerCard,
  ChillerContent,
  ChillerHead,
  ChillerText,
  ChillerTitle,
  JetChillerAboutWrapper,
} from "./style"
import { Container } from "../../../common/style/global"
import CillerBg from "../assets/chillerBg.webp"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"
import { CardContent, CardText, CardTitle } from "../jet-characteristic/style"
import CoolIc from "../assets/cool.webp"
import ElemIc from "../assets/elements.webp"
import VentIc from "../assets/vent.svg"

export const JetChillerAbout = () => {
  return (
    <JetChillerAboutWrapper>
      <Container>
        <ChillerHead>
          <ChillerTitle>
            Фреоновый чиллер, радиатор большой площади, 4 вентилятора,
            дистиллированная вода
          </ChillerTitle>
          <ChillerText>Система охлаждения</ChillerText>
        </ChillerHead>
      </Container>

      <ChillerContent src={CillerBg}>
        <ChillerCard>
          <SvgComponent src={ElemIc} width={"100px"} height={"80px"} />
          <CardContent>
            <CardTitle>Безболезненность</CardTitle>
            <CardText>TEC система манипулы</CardText>
          </CardContent>
        </ChillerCard>
        <ChillerCard>
          <SvgComponent src={CoolIc} width={"100px"} height={"80px"} />
          <CardContent>
            <CardTitle>1–10 Гц</CardTitle>
            <CardText>Система охлаждения наконечника</CardText>
          </CardContent>
        </ChillerCard>
        <ChillerCard>
          <SvgComponent src={VentIc} width={"100px"} height={"80px"} />
          <CardContent>
            <CardTitle>до –16°C</CardTitle>
            <CardText>Охлаждение контактного пятна</CardText>
          </CardContent>
        </ChillerCard>
      </ChillerContent>
    </JetChillerAboutWrapper>
  )
}
