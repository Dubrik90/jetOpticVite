import styled from "styled-components"

export const HomeWrapper = styled.div``
export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 170px;
  z-index: 5;
  position: relative;

  @media (max-width: 1920px) {
    padding-top: calc(70px + (170 - 70) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const AboutJetOptic = styled.div`
  position: relative;
  padding-bottom: 43%;
`
export const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    @media (max-width: 610px) {
      object-fit: contain;
    }
  }
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
  // padding-bottom: 650px;
  @media (max-width: 1920px) {
    font-size: calc(16px + (48 - 16) * ((100vw - 390px) / (1920 - 390)));
    max-width: calc(180px + (752 - 180) * ((100vw - 390px) / (1920 - 390)));
    //padding-bottom: calc(
    //  170px + (650 - 170) * ((100vw - 390px) / (1920 - 390))
    //);
  }
`
