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
    font-size: calc(16px + (26 - 16) * ((100vw - 768px) / (1920 - 768)));
    margin-right: calc(52px + (94 - 52) * ((100vw - 768px) / (1920 - 768)));

    svg {
      width: calc(18px + (40 - 18) * ((100vw - 768px) / (1920 - 768)));
    }
  }
  @media (max-width: 767px) {
    font-size: var(--fs-16);
    margin-right: 0;
    order: 5;
    column-gap: 10px;
  }
`
export const MenuLinks = styled.ul<{ isOpenBurger: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 60px;

  @media (max-width: 1920px) {
    column-gap: calc(23px + (60 - 23) * ((100vw - 768px) / (1920 - 768)));
  }

  a {
    @media (max-width: 1920px) {
      font-size: calc(16px + (26 - 16) * ((100vw - 768px) / (1920 - 768)));
    }
    @media (max-width: 768px) {
      font-size: var(--fs-16);
    }
    @media (max-width: 767px) {
      color: var(--color-withe);
    }
    :hover {
      color: var(--color-ogange);
    }
  }
  a.active {
    color: var(--color-ogange);
  }

  @media (max-width: 767px) {
    left: ${({ isOpenBurger }) => (isOpenBurger ? "0" : "-100%")};
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    row-gap: 20px;
    overflow: auto;
    height: 220px;
    position: fixed;
    top: 0;
    padding-top: 25px;
    padding-bottom: 40px;
    background-color: var(--bg-dark);
    width: 100%;
    transition: left 0.3s;

    :after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
    }
  }
`
