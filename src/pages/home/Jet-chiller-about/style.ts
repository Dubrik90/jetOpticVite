import styled from "styled-components"
import { Card, CardText, CardTitle } from "../jet-characteristic/style"

export const JetChillerAboutWrapper = styled.div<{ src: string }>`
  
`
export const ChillerHead = styled(Card)`
  flex-direction: column;
  max-width: 754px;
  align-items: flex-start;
  position: relative;
  row-gap: 40px;
  @media (max-width: 1920px) {
    max-width: calc(190px + (754 - 190) * ((100vw - 390px) / (1920 - 390)));
    padding: calc(7px + (40 - 7) * ((100vw - 390px) / (1920 - 390)))
      calc(5px + (10 - 5) * ((100vw - 390px) / (1920 - 390)))
      calc(7px + (40 - 7) * ((100vw - 390px) / (1920 - 390)))
      calc(14px + (28 - 14) * ((100vw - 390px) / (1920 - 390)));
    row-gap: calc(10px + (40 - 10) * ((100vw - 390px) / (1920 - 390)));
  }
  :before {
    content: '';
    width: 370px;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    z-index: 10;
    background: rgba(248, 137, 8, 0.7);
    filter: blur(250px);
    @media (max-width: 768px) {
      display: none;
    }
  }
`
export const ChillerTitle = styled(CardTitle)``
export const ChillerText = styled(CardText)``
export const ChillerContent = styled.div`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 50%;
  height: 1380px;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 74px;
  align-self: center;
  justify-content: center;
  margin-top: -200px;

  @media (max-width: 1920px) {
    row-gap: calc(30px + (74 - 30) * ((100vw - 390px) / (1920 - 390)));
    height: calc(390px + (1380 - 390) * ((100vw - 390px) / (1920 - 390)));
    margin-top: calc(-50px + (-200 - -50) * ((100vw - 390px) / (1920 - 390)));
  }
 > div:nth-child(1) {
    position: relative;
    left: -5%;
   @media (max-width: 700px) {
     left: -10%;
   }
   @media (max-width: 425px) {
     left: -20%;
   }
  }
  > div:nth-child(2) {
    position: relative;
    left: -10%;
    @media (max-width: 700px) {
      left: -15%;
    }
    @media (max-width: 425px) {
      left: -25%;
    }
  }
  > div:nth-child(3) {
    @media (max-width: 700px) {
      position: relative;
      left: -7%;
    }
    @media (max-width: 425px) {
      left: -15%;
    }
  }

`
export const ChillerCard = styled(Card)`
  align-self: center;
  bottom: -150px;
  position: relative;
  max-width: 500px;
  @media (max-width: 1920px) {
    bottom: calc(-35px + (-150 - -35) * ((100vw - 390px) / (1920 - 390)));
    max-width: calc(110px + (500 - 110) * ((100vw - 390px) / (1920 - 390)));
  }
  svg {
    width: 200px;
    @media (max-width: 1920px) {
      width: calc(50px + (200 - 50) * ((100vw - 390px) / (1920 - 390)));
      height: calc(40px + (100 - 40) * ((100vw - 390px) / (1920 - 390)));
    }
  }
`
