import styled from "styled-components"

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  @media (max-width: 1920px) {
    column-gap: calc(15px + (40 - 15) * ((100vw - 768px) / (1920 - 768)));
    img {
      width: calc(35px + (70 - 35) * ((100vw - 768px) / (1920 - 768)));
      height: calc(35px + (70 - 35) * ((100vw - 768px) / (1920 - 768)));
    }
  }
  @media (max-width: 767px) {
    column-gap: 15px;
    img {
      width: 35px;
      height: 35px;
    }
  }
  img {
    transition: transform 0.3s;
  }
  a:hover {
    img {
      transform: translateY(-5px);
    }
  }
`
