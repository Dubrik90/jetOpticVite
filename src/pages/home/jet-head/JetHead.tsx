import React from "react"
import HomeBg from "../assets/jet-bg.png"
import { Container } from "../../../common/style/global"
import {
  AboutJetOptic,
  Content,
  HomeContent,
  ImgWrap,
  SubTitle,
  Title,
} from "./style"

export const JetHead = () => {
  return (
    <AboutJetOptic src={HomeBg}>
      <Container>
        <Content>
          <HomeContent>
            <Title>JetOptic</Title>
            <SubTitle>Диодный лазер для эпиляции премиум класса</SubTitle>
          </HomeContent>
        </Content>
      </Container>
      <ImgWrap>
        <img src={HomeBg} alt="HomeBg" />
      </ImgWrap>
    </AboutJetOptic>
  )
}
