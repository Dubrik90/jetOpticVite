import React from "react"
import {
  AboutBlock,
  AboutContent, AboutContent2,
  AboutText,
  AboutWrapper,
  Content,
  ImgBlock,
  TitleAbout,
} from "./style"
import { Container } from "../../common/style/global"
import img1 from "./assets/about-img-1.png"
import img1Mob from "./assets/about-img-1-mobile.png"
import img2Mob from "./assets/about-img-2-mobile.png"
import img2 from "./assets/about-img-2.png"

export const About = () => {
  return (
    <AboutWrapper>
      <AboutBlock>
        <AboutContent>
          <ImgBlock>
            <picture>
              <source media="(max-width: 767px)" srcSet={img1Mob} />
              <img src={img1} alt="картинка оборудования" />
            </picture>
          </ImgBlock>
          <Content>
            <TitleAbout>О нас</TitleAbout>
            <AboutText>
              Инженерное ателье «Техника Красоты» работает для Вас уже более 7
              лет. С самых первых дней и по сегодняшний день мы находимся в
              авангарде и развиваемся в сфере создания современных технологий,
              инноваций и производства. Предлагаем своим клиентам качественное и
              надежное оборудование для бизнеса.
            </AboutText>
          </Content>
        </AboutContent>
        <AboutContent2>
          <Content>
            <AboutText>
              Инженерное ателье «Техника Красоты» работает для Вас уже более 7
              лет. С самых первых дней и по сегодняшний день мы находимся в
              авангарде и развиваемся в сфере создания современных технологий,
              инноваций и производства. Предлагаем своим клиентам качественное и
              надежное оборудование для бизнеса.
            </AboutText>
          </Content>
          <ImgBlock>
            <picture>
              <source media="(max-width: 767px)" srcSet={img2Mob} />
              <img src={img2} alt="картинка оборудования" />
            </picture>
          </ImgBlock>
        </AboutContent2>
      </AboutBlock>
    </AboutWrapper>
  )
}
