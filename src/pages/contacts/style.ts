import styled from "styled-components"
import { TitleGL } from "../../common/style/global"

export const ContactsWrapper = styled.div`
  padding-top: 199px;
  padding-bottom: 50px;
  @media (max-width: 1920px) {
    padding-top: calc(70px + (199 - 70) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const ContactsBlock = styled.div`
  display: flex;
  column-gap: 138px;
  @media (max-width: 1920px) {
    column-gap: calc(20px + (138 - 20) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const TitleContacts = styled(TitleGL)`
  margin-bottom: 62px;
  text-align: center;
  @media (max-width: 1920px) {
    margin-bottom: calc(21px + (62 - 21) * ((100vw - 390px) / (1920 - 390)));
  }
`
