import styled from "styled-components"
import { TextGL, TitleGL } from "../../common/style/global"

export const AboutWrapper = styled.div`
  padding-top: 90px;
  @media (max-width: 1920px) {
    padding-top: calc(50px + (90 - 50) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    padding-top: 50px;
  }
`
export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 57px;
  @media (max-width: 1920px) {
    row-gap: calc(20px + (57 - 20) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 36px;
  @media (max-width: 1920px) {
    column-gap: calc(14px + (36 - 14) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const ImgBlock = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AboutContent2 = styled(AboutContent)`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
export const Content = styled.div`
  max-width: 775px;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`
export const TitleAbout = styled(TitleGL)`
  padding-top: 88px;
  margin-bottom: 80px;
  @media (max-width: 1920px) {
    margin-bottom: calc(14px + (80 - 14) * ((100vw - 390px) / (1920 - 390)));
    padding-top: calc(19px + (88 - 19) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const AboutText = styled(TextGL)``
