import React from "react"
import {
  JetAboutContent,
  JetAboutWrapper,
  TextAbout,
  TitleAbout,
} from "./style"
import { Container} from "../../../common/style/global"

export const JetAbout = () => {
  return (
    <JetAboutWrapper>
      <Container>
        <TitleAbout>Лучшее решение для Вашего бизнеса</TitleAbout>
        <JetAboutContent>
          <TextAbout>
            В разработке JetOptic применены самые последние исследования.
            Благодаря этому достигнута беспрецендентная безопасность, высокая
            эффективность и безболезненность процедуры. Длина волны 808 нм
            эффективно воздействует на фолликулы волос и качественно удаляет
            волосы без влияния на ткани кожи.
          </TextAbout>
          <TextAbout>
            Способность работать в режиме 24/7 и обслуживать непрерывный поток
            клиентов достигается за счет усиленной силовой части электроники,
            инновационной системы охлаждения аппарата с фанкойлом и
            компрессорной установкой.
          </TextAbout>
        </JetAboutContent>
      </Container>
    </JetAboutWrapper>
  )
}
