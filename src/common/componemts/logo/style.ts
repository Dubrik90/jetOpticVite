import styled from "styled-components"

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    font-family: var(--family-Dewberry);
    display: inline-block;
    border: 2px solid var(--color-red-border);
    border-radius: 56px;
    padding: 15px 35px;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s;

    @media (max-width: 1920px) {
      font-size: calc(13px + (24 - 13) * ((100vw - 768px) / (1920 - 768)));
      padding: calc(7px + (15 - 7) * ((100vw - 768px) / (1920 - 768)))
        calc(16px + (35 - 16) * ((100vw - 768px) / (1920 - 768)));
    }
    @media (max-width: 767px) {
      border: 1px solid var(--color-red-border);
      font-size: 14px;
      padding: 7px 16px;
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
  }
`
