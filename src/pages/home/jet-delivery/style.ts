import styled from "styled-components"

export const JetDeliveryWrapper = styled.div`
  padding-bottom: 100px;
`
export const ImgWrap = styled.div`
  img {
    max-width: 100%;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 90px;
  padding-right: 40px;
  @media (max-width: 1920px) {
    column-gap: calc(60px + (90 - 60) * ((100vw - 768px) / (1920 - 768)));
  }
`
export const SubTitle = styled.p`
  font-family: "Mulish";
  font-weight: var(--fw-bold);
  font-size: 36px;
  line-height: 1.13;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(14px + (36 - 14) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const DeliveryBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  max-width: 840px;
`
export const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;
`