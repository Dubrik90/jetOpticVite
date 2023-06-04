import styled from "styled-components"

export const BarLinksWrap = styled.div`
  position: fixed;
  right: 0;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`
export const BarLinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-end;

  a {
    img {
      width: 80px;
      @media (max-width: 1920px) {
        transition: transform 0.3s;
        width: calc(30px + (80 - 30) * ((100vw - 390px) / (1920 - 390)));
      }
    }

    :hover {
      img {
        transform: translateX(-5px);
      }
    }
  }
`
