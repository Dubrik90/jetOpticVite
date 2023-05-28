import styled from "styled-components"
import { LogoWrapper } from "../logo/style"

export const FooterWrapper = styled.footer`
  background-color: var(--bg-footer);
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
    flex-direction: column;
    row-gap: 29px;
    padding: 30px 0;
  }
`

export const Partner = styled.p`
  font-family: Dewberry;
  font-weight: var(--fw-semiBold);
  font-size: 36px;
  line-height: 1.13;
  color: var(--color-dark);
  width: 397px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 21px;
  @media (max-width: 1920px) {
    font-size: calc(16px + (36 - 16) * ((100vw - 768px) / (1920 - 768)));
    width: calc(180px + (397 - 180) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    font-size: 16px;
    width: 180px;
  }
`
export const LogoFooterWrapper = styled(LogoWrapper)`
  a {
    @media (max-width: 1920px) {
      font-size: calc(14px + (28 - 14) * ((100vw - 768px) / (1920 - 768)));
      padding: calc(12px + (24 - 12) * ((100vw - 768px) / (1920 - 768)))
        calc(40px + (35 - 40) * ((100vw - 768px) / (1920 - 768)));
    }
    @media (max-width: 767px) {
      border: 2px solid var(--color-red-border);
      font-size: 14px;
      padding: 12px 40px;
    }
  }
`
