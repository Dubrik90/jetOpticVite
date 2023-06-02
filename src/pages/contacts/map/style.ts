import styled from "styled-components"

import { Map } from "react-yandex-maps"

export const StyledMap = styled(Map)`
  margin-top: 50px;
  width: calc(460px + (700 - 460) * ((100vw - 1024px) / (1920 - 1024)));
  height: calc(300px + (390 - 300) * ((100vw - 320px) / (1920 - 320)));
  //border-radius: 17px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const MapComponentWrapper = styled.div`
  background: var(--colors-bg-green-dark);
  padding-top: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
`
export const MapWrapperBlock = styled.div`
  display: flex;
  column-gap: calc(30px + (140 - 30) * ((100vw - 320px) / (1920 - 320)));
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    justify-content: center;
  }
`
export const CardWrapper = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`
export const ContactBlock = styled.div``

export const MapWrapper = styled.div`
  border-radius: 17px;
  //overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Title = styled.h3`
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
  color: var(--color-withe);
  max-width: 620px;
  @media (max-width: 1920px) {
    font-size: calc(14px + (32 - 14) * ((100vw - 390px) / (1920 - 390)));
  }
`
