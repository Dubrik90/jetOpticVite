import styled from "styled-components"

export const BarFoot = styled.div`
  z-index: 70;
  position: fixed;
  width: 100%;
  bottom: 40px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
`
export const RequestCall = styled.div`
  font-family: "Dewberry";
  font-weight: var(--fw-medium);
  font-size: var(--fs-18);
  line-height: 1.16;
  text-align: center;
  position: relative;
  max-width: 88px;
  transition: color 0.3s;
  z-index: 20;
  color: var(--color-withe);
  cursor: pointer;
  @media (max-width: 1920px) {
    font-size: calc(8px + (18 - 8) * ((100vw - 390px) / (1920 - 390)));
    max-width: calc(40px + (88 - 40) * ((100vw - 390px) / (1920 - 390)));
  }

  :after {
    content: "";
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 115px;
    height: 115px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    @media (max-width: 1920px) {
      width: calc(50px + (115 - 50) * ((100vw - 390px) / (1920 - 390)));
      height: calc(50px + (115 - 50) * ((100vw - 390px) / (1920 - 390)));
    }
  }

  :hover {
    color: var(--color-ogange);
  }
`

export const MessageIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;
  :hover {
    transform: translateX(-5px);
  }
  @media (max-width: 1920px) {
    width: calc(25px + (60 - 25) * ((100vw - 390px) / (1920 - 390)));
    height: calc(25px + (60 - 25) * ((100vw - 390px) / (1920 - 390)));
  }
  :after {
    content: "";
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 115px;
    height: 115px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    @media (max-width: 1920px) {
      width: calc(50px + (115 - 50) * ((100vw - 390px) / (1920 - 390)));
      height: calc(50px + (115 - 50) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`

export const CircleBadge = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f46958;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1920px) {
    width: calc(17px + (40 - 17) * ((100vw - 390px) / (1920 - 390)));
    height: calc(17px + (40 - 17) * ((100vw - 390px) / (1920 - 390)));
    right: calc(-13px + (-20 - -13) * ((100vw - 390px) / (1920 - 390)));
    top: calc(-17px + (-20 - -17) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const BadgeText = styled.span`
  color: white;
  font-size: 16px;
  @media (max-width: 1920px) {
    font-size: calc(13px + (16 - 13) * ((100vw - 390px) / (1920 - 390)));
  }
`
