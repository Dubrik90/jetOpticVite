import styled from "styled-components"
import { TextGL, TitleGL } from "../../../common/style/global"

export const JetAboutWrapper = styled.div`
  padding: 100px 0;
  @media (max-width: 1920px) {
    padding: calc(30px + (100 - 30) * ((100vw - 390px) / (1920 - 390))) 0;
  }
`
export const JetAboutContent = styled.div`
  display: flex;
  column-gap: 140px;
  justify-content: space-between;
  @media (max-width: 1920px) {
    column-gap: calc(35px + (140 - 35) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 10px;
  }
`
export const TitleAbout = styled(TitleGL)`
  max-width: 1031px;
  margin-bottom: 70px;
  @media (max-width: 1920px) {
    margin-bottom: calc(20px + (70 - 20) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const TextAbout = styled(TextGL)`
    max-width: 785px;
  @media (max-width: 1920px) {
    max-width: calc(320px + (785 - 320) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`
