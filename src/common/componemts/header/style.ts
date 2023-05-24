import styled from "styled-components";

export const HeaderWrapper = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--bg-header);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`
export const HeaderContent = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 1920px) {
    height: calc(50px + (125 - 50) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 768px) {
    height: 50px;
  }
`