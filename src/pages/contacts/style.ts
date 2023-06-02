import styled from "styled-components"
import { TitleGL } from "../../common/style/global"

export const ContactsWrapper = styled.div`
  padding-top: 199px;
  @media (max-width: 1920px) {
    padding-top: calc(70px + (199 - 70) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const TitleContacts = styled(TitleGL)`
  margin-bottom: 62px;
  @media (max-width: 1920px) {
    margin-bottom: calc(21px + (62 - 21) * ((100vw - 390px) / (1920 - 390)));
  }
`
