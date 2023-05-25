import React from "react"
import {
  AboutJetOptic, Content,
  HomeContent,
  HomeWrapper,
  ImgWrap,
  SubTitle,
  Title,
} from "./style"
import { Container } from "../../common/style/global"
import { BackgroundImage } from "../../common/componemts/background-image/BackgroundImage"
import HomeBg from "./assets/jet-bg.png"

export const Home = () => {
  return (
    <HomeWrapper>
      {/*<BackgroundImage imageUrl={HomeBg}>*/}
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

      {/*</BackgroundImage>*/}
      <div>asfasf</div>
    </HomeWrapper>
  )
}
