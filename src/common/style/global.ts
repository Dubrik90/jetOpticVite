import styled, { createGlobalStyle } from "styled-components"

import "./null.css"
import "../../assets/fonts/fonts.css"

export default createGlobalStyle`
  :root {
    /* Typography */
    --family: 'Mulish', sans-serif;
    --family-Dewberry: 'Dewberry';

    // --fs-12: 12px;
    //  --fs-14: 14px;
    --fs-16: 16px;
    --fs-18: 18px;
    --fs-36: 36px;
    --fs-48: 48px;
    --fs-96: 96px;

    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semiBold: 600;
    --fw-bold: 700;

    /*Colors*/
    --color-dark: #000;
    --color-sub-title: #dadada;
    --color-withe: #fff;
    --color-ogange: #DF7E0C;
    --color-ogange-border: #E4A135;
    --color-red-border: #F35440;
    // --color-grey-light: #EAEAEA;
    // --color-menu-hover: #79E35E;
    //--color-dg-footer: #3D5F47;
    --bg-header: rgba(100, 100, 100, 0.5);
    --bg-dark: #252525;

    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    --bg-footer: rgba(100, 100, 100, 0.77);
    --bg-main: #252525;

  }

  body {
    line-height: 1;
    margin: 0;
    font-family: var(--family);
    font-weight: var(--fw-regular);
    background-color: var(--colors-bg);
    font-size: var(--fs-36);
    transition: all 0.3s;
    color: var(--color-withe);
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
export const Container = styled.div.attrs({
  className: "container",
})`
  max-width: 1650px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`
export const TitleGL = styled.h2`
  font-family: "Dewberry";
  font-weight: var(--fw-semiBold);
  font-size: var(--fs-96);
  line-height: 1.14;
  letter-spacing: 0.05em;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(20px + (96 - 20) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const TextGL = styled.p`
  font-size: var(--fs-36);
  line-height: 1.12;
  color: var(--color-withe);
  @media (max-width: 1920px) {
    font-size: calc(14px + (36 - 14) * ((100vw - 390px) / (1920 - 390)));
  }
`
