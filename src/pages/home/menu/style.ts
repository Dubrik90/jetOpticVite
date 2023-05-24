import styled from "styled-components"

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-right: 94px;

  @media (max-width: 1920px) {
    font-size: calc(16px + (36 - 16) * ((100vw - 768px) / (1920 - 768)));
    margin-right: calc(52px + (94 - 52) * ((100vw - 768px) / (1920 - 768)));

    svg {
      width: calc(18px + (40 - 18) * ((100vw - 768px) / (1920 - 768)));
    }
  }
  @media (max-width: 768px) {
    font-size: var(--fs-16);
  }
`
export const MenuLink = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 60px;

  @media (max-width: 1920px) {
    column-gap: calc(23px + (60 - 23) * ((100vw - 768px) / (1920 - 768)));
  }

  a {
    @media (max-width: 1920px) {
      font-size: calc(16px + (36 - 16) * ((100vw - 768px) / (1920 - 768)));
    }
    @media (max-width: 768px) {
      font-size: var(--fs-16);
    }
  }
`
