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
    --fs-36: 36px;
    --fs-48: 48px;
    --fs-96: 96px;

    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semiBold: 600;
    --fw-bold: 700;

    /*Colors*/
    --color-dark: #000;
    --color-withe: #fff;
    --color-ogange: #DF7E0C;
    --color-ogange-border: #E4A135;
    --color-red-border: #F35440;
    // --color-grey-light: #EAEAEA;
    // --color-menu-hover: #79E35E;
    //--color-dg-footer: #3D5F47;
    --bg-header: rgba(100, 100, 100, 0.5);
    --shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    --bg-footer: rgba(255, 255, 255, 0.23);

  }

  body {
    line-height: 1;
    margin: 0;
    font-family: var(--family);
    font-weight: var(--fw-regular);
    background-color: var(--colors-bg);
    font-size: var(--fs-36);
    transition: all 0.3s;
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
  max-width: 1625px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`
