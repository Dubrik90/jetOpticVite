import styled from "styled-components"

export const FooterWrapper = styled.footer`
  box-shadow: var(--shadow);
  background-color: aquamarine;
`

export const FooterContent = styled.div`
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1920px) {
    height: calc(109px + (270 - 109) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    height: auto;
  }
`
