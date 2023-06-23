import styled from "styled-components"
import { TitleGL } from "../../../common/style/global"

export const JetCharacteristicWrapper = styled.div``
export const CharacteristicContent = styled.div<{ src: string }>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  height: 1091px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  row-gap: 40px;
  position: relative;
  @media (max-width: 1920px) {
    row-gap: calc(5px + (40 - 5) * ((100vw - 390px) / (1920 - 390)));
    height: calc(300px + (1091 - 300) * ((100vw - 390px) / (1920 - 390)));
  }
  :before {
    content: "";
    width: 370px;
    height: 370px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 100%;
    z-index: 10;
    background: rgba(248, 137, 8, 0.7);
    filter: blur(250px);
    @media (max-width: 1024px) {
      top: 0;
    }
  }
`
export const CharacteristicTitle = styled(TitleGL)``

export const Card = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(76.4deg, #131313 0%, #383838 93.4%);
  box-shadow: 8px 8px 10px rgba(19, 19, 19, 0.25);
  border-radius: 54px;
  padding: 40px 10px 40px 28px;
  column-gap: 42px;
  max-width: 395px;
  align-self: flex-end;
  @media (max-width: 1920px) {
    padding: calc(7px + (40 - 7) * ((100vw - 390px) / (1920 - 390)))
      calc(10px + (10 - 10) * ((100vw - 390px) / (1920 - 390)))
      calc(7px + (40 - 7) * ((100vw - 390px) / (1920 - 390)))
      calc(7px + (28 - 7) * ((100vw - 390px) / (1920 - 390)));
    column-gap: calc(10px + (42 - 10) * ((100vw - 390px) / (1920 - 390)));
    border-radius: calc(10px + (54 - 10) * ((100vw - 390px) / (1920 - 390)));
    max-width: calc(110px + (395 - 110) * ((100vw - 390px) / (1920 - 390)));
  }
  &.bottom {
    position: relative;
    bottom: -20px;
    z-index: 1;
    @media (max-width: 1920px) {
      bottom: calc(-5px + (-20 - -5) * ((100vw - 390px) / (1920 - 390)));
    }
  }

  svg {
    width: 100px;
    @media (max-width: 1920px) {
      width: calc(30px + (100 - 30) * ((100vw - 390px) / (1920 - 390)));
      height: calc(20px + (80 - 20) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`
export const ImgWrap = styled.div`
  img {
    width: 100%;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
  @media (max-width: 1920px) {
    row-gap: calc(5px + (10 - 5) * ((100vw - 390px) / (1920 - 390)));
  }
  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: -21px;
    transform: translateY(-50%);
    width: 1px;
    height: 100%;
    background-color: #f88908;
    @media (max-width: 1920px) {
      left: calc(-5px + (-21 - -5) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`
export const CardTitle = styled.div`
  font-weight: var(--fw-semiBold);
  font-size: var(--fs-30);
  line-height: 1.12;
  color: var(--color-ogange);
  @media (max-width: 1920px) {
    font-size: calc(12px + (36 - 12) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const CardText = styled.div`
  font-size: 28px;
  line-height: 1.12;
  text-transform: uppercase;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(8px + (28 - 8) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1530px;
  box-sizing: content-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  @media (max-width: 1920px) {
    max-width: calc(350px + (1530 - 350) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const Row2 = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1430px;
  box-sizing: content-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  @media (max-width: 1920px) {
    max-width: calc(325px + (1430 - 325) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const Row3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1062px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  box-sizing: content-box;
  @media (max-width: 1920px) {
    max-width: calc(235px + (1062 - 235) * ((100vw - 390px) / (1920 - 390)));
  }
`
