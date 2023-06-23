import styled from "styled-components"
import { TitleGL } from "../../../common/style/global"

export const OfficialSupplierWrapper = styled.div`
  padding-bottom: 100px;
  @media (max-width: 1920px) {
    padding-bottom: calc(30px + (100 - 30) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const SupplierTitle = styled(TitleGL)`
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 1920px) {
    margin-bottom: calc(10px + (50 - 10) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const SupplierSubTitle = styled.p`
  font-family: "Dewberry";
  font-weight: var(--fw-semiBold);
  font-size: 50px;
  line-height: 1.15;
  text-align: center;
  margin-bottom: 90px;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(16px + (50 - 16) * ((100vw - 390px) / (1920 - 390)));
    margin-bottom: calc(20px + (90 - 20) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const SupplierColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  row-gap: 71px;
  justify-content: center;
  justify-items: center;
  @media (max-width: 1920px) {
    row-gap: calc(21px + (71 - 21) * ((100vw - 390px) / (1920 - 390)));
    column-gap: calc(20px + (50 - 20) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ColumnCard = styled.div`
  width: 100%;
  background: linear-gradient(73.33deg, #131313 3.44%, #383838 106.39%);
  box-shadow: 8px 8px 10px rgba(19, 19, 19, 0.25);
  border-radius: 54px;
  padding: 51px 50px;
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  max-width: 400px;
  align-items: center;
  @media (max-width: 1920px) {
    padding: calc(20px + (51 - 20) * ((100vw - 390px) / (1920 - 390)))
      calc(14px + (50 - 14) * ((100vw - 390px) / (1920 - 390)));
    row-gap: calc(9px + (21 - 9) * ((100vw - 390px) / (1920 - 390)));
    border-radius: calc(10px + (54 - 10) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  svg {
    width: 200px;
    height: 190px;
    @media (max-width: 1920px) {
      width: calc(81px + (200 - 81) * ((100vw - 390px) / (1920 - 390)));
      height: calc(68px + (190 - 68) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`
export const CardText = styled.p`
  text-align: center;
  font-family: "Mulish";
  font-weight: var(--fw-medium);
  font-size: 26px;
  line-height: 1.14;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(12px + (26 - 12) * ((100vw - 390px) / (1920 - 390)));
  }
`
