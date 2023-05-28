import styled from "styled-components"
import { ImageProps } from "../../../common/types/type"

export const AboutJetOptic = styled.div<ImageProps>`
  position: relative;
  background: linear-gradient(
      90.38deg,
      rgba(95, 74, 1, 0.4) 0.29%,
      rgba(217, 217, 217, 0) 98.48%
    ),
    url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 0;
  //background-color: linear-gradient(
  //  90.38deg,
  //  rgba(95, 74, 1, 0.4) 0.29%,
  //  rgba(217, 217, 217, 0) 98.48%
  //);
  height: 1090px;
  @media (max-width: 1920px) {
    height: calc(330px + (1090 - 330) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 768px) {
    background-size: 0;
  }
`
export const ImgWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      90.38deg,
      rgba(95, 74, 1, 0.4) 0.29%,
      rgba(217, 217, 217, 0) 98.48%
    );
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      @media (max-width: 610px) {
        object-fit: contain;
        object-position: 30% 100%;
      }
    }
  }
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 170px;
  z-index: 5;
  position: relative;
  margin-right: -600px;

  @media (max-width: 1920px) {
    padding-top: calc(60px + (170 - 60) * ((100vw - 390px) / (1920 - 390)));
    margin-right: calc(
      -190px + (-600 - -190) * ((100vw - 390px) / (1920 - 390))
    );
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
`
export const Title = styled.h1`
  font-family: "Dewberry";
  font-style: normal;
  font-weight: 600;
  font-size: 180px;
  line-height: 1.15;
  background: linear-gradient(0deg, #ffcf3d, #ffcf3d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  @media (max-width: 1920px) {
    font-size: calc(36px + (180 - 36) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const SubTitle = styled.p`
  font-weight: var(--fw-bold);
  font-size: var(--fs-48);
  line-height: 1.25;
  color: var(--color-sub-title);
  max-width: 752px;
  @media (max-width: 1920px) {
    font-size: calc(16px + (48 - 16) * ((100vw - 390px) / (1920 - 390)));
    max-width: calc(150px + (752 - 150) * ((100vw - 390px) / (1920 - 390)));
  }
`
