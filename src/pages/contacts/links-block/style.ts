import styled from "styled-components"
import { TitleContacts } from "../map/style"

export const LinksBlockWrapper = styled.div``
export const TitleLinksBlock = styled(TitleContacts)`
  margin-bottom: 40px;
  @media (max-width: 1920px) {
    margin-bottom: calc(15px + (40 - 15) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`
export const BlockLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  @media (max-width: 1920px) {
    row-gap: calc(15px + (35 - 15) * ((100vw - 390px) / (1920 - 390)));
  }
  a {
    display: flex;
    align-items: center;
    column-gap: 20px;

    span {
      transition: color 0.3s;
    }
    :hover {
      span {
        color: var(--color-ogange-border);
      }
    }
    span {
      font-family: "Mulish";
      font-size: 36px;
      line-height: 1.13;
      color: var(--color-withe);
      @media (max-width: 1920px) {
        font-size: calc(14px + (36 - 14) * ((100vw - 390px) / (1920 - 390)));
      }
    }
    img {
      width: 70px;
      @media (max-width: 1920px) {
        width: calc(25px + (70 - 25) * ((100vw - 390px) / (1920 - 390)));
      }
    }
    @media (max-width: 1920px) {
      column-gap: calc(10px + (20 - 10) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`
