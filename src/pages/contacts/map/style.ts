import styled from "styled-components"

import { Map } from "react-yandex-maps"

export const StyledMap = styled(Map)`
  margin-top: 50px;
  width: 826px;
  height: 691px;
  @media (max-width: 1920px) {
    width: calc(374px + (826 - 374) * ((100vw - 768px) / (1920 - 768)));
    height: calc(318px + (691 - 318) * ((100vw - 768px) / (1920 - 768)));
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const MapWrapper = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const TitleContacts = styled.h3`
  font-weight: var(--fw-bold);
  font-size: 36px;
  line-height: 1.3;
  color: var(--colors-text-dark);
  margin-bottom: 31px;
  @media (max-width: 1920px) {
    font-size: calc(14px + (36 - 14) * ((100vw - 390px) / (1920 - 390)));
    margin-bottom: calc(31px + (36 - 31) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const SubTitle = styled.p`
  font-family: "Mulish";
  font-size: 32px;
  line-height: 1.13;
  align-self: flex-start;
  text-align: left;
  color: var(--color-withe);
  max-width: 620px;
  @media (max-width: 1920px) {
    font-size: calc(14px + (32 - 14) * ((100vw - 390px) / (1920 - 390)));
  }
`
