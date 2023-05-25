import React from "react"
import {
  AboutJetOptic,
  Content,
  HomeContent,
  HomeWrapper,
  ImgWrap,
  SubTitle,
  Title,
} from "./style"
import { Container } from "../../common/style/global"
import HomeBg from "./assets/jet-bg.png"

export const Home = () => {
  return (
    <HomeWrapper>
      <AboutJetOptic>
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
      <div>asfasf</div>
    </HomeWrapper>
  )
}
