import styled from "styled-components";

export const LogoWrapper = styled.a.attrs({
    alt: 'логотип комнании'
})`
  font-family: var(--family-Dewberry);
  display: inline-block;
  border: 2px solid var(--color-red-border);
  border-radius: 56px;
  padding: 24px 35px;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.3s;

  @media (max-width: 1920px) {
    font-size: calc(11px + (28 - 11) * ((100vw - 768px) / (1920 - 768)));
    padding: calc(10px + (24 - 10) * ((100vw - 768px) / (1920 - 768))) calc(14px + (35 - 14) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 768px) {
    border: 1px solid var(--color-red-border);
  }

  span {
    color: var(--color-red-border);
    transition: color 0.3s;
  }

  &:hover {
    color: var(--color-red-border);

    span {
      color: var(--color-dark);
    }
  }
`