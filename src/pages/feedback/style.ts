import styled from "styled-components"
import { ImageProps } from "../../common/types/type"

export const FeedbackWrapper = styled.div<ImageProps>`
  // position: relative;
  padding-top: 199px;
  padding-bottom: 50px;
  background: linear-gradient(
      90.38deg,
      rgba(95, 74, 1, 0.4) 0.29%,
      rgba(217, 217, 217, 0) 98.48%
    ),
    url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 100%;
  @media (max-width: 1920px) {
    padding-top: calc(70px + (199 - 70) * ((100vw - 390px) / (1920 - 390)));
  }
  height: 1380px;
  @media (max-width: 1920px) {
    height: calc(653px + (1380 - 653) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    background-size: 0;
    padding-top: 0;
    height: auto;
  }
`
export const ImgWrap = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    //position: absolute;
    //top: 0;
    //left: 0;
    //width: 100%;
    //height: 100%;
    //z-index: 1;
    background: linear-gradient(
      90.38deg,
      rgba(95, 74, 1, 0.4) 0.29%,
      rgba(217, 217, 217, 0) 98.48%
    );
    img {
      //position: absolute;
      width: 100%;
      max-height: 100%;
      //top: 0;
      //left: 0;
      object-fit: contain;
      //@media (max-width: 610px) {
      //  object-fit: contain;
      //  object-position: 30% 100%;
      //}
    }
  }
`

export const FeedbackContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
export const ContactFormContainer = styled.div`
  padding: 66px 61px 100px 48px;
  width: 955px;
  z-index: 50;
  position: relative;
  margin-right: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  @media (max-width: 1920px) {
    padding: calc(50px + (66 - 50) * ((100vw - 768px) / (1920 - 768)))
      calc(43px + (61 - 43) * ((100vw - 768px) / (1920 - 768)))
      calc(50px + (100 - 50) * ((100vw - 768px) / (1920 - 768)))
      calc(43px + (48 - 43) * ((100vw - 768px) / (1920 - 768)));
    width: calc(407px + (955 - 407) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 1024px) {
    margin-right: 70px;
  }
  @media (max-width: 767px) {
    padding: 30px;
    margin-right: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const TitleForm = styled.h3`
  margin-bottom: 100px;
  font-family: "Dewberry";
  font-weight: var(--fw-semiBold);
  font-size: 64px;
  line-height: 1.14;
  color: var(--color-dark);
  @media (max-width: 1920px) {
    font-size: calc(20px + (64 - 20) * ((100vw - 390px) / (1920 - 390)));
    margin-bottom: calc(35px + (100 - 35) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 767px) {
    color: var(--color-withe);
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 70px;
  @media (max-width: 1920px) {
    margin-bottom: calc(30px + (70 - 30) * ((100vw - 768px) / (1920 - 768)));
  }
  @media (max-width: 767px) {
    margin-bottom: 35px;
  }
`
export const InputContainer = styled.div`
  position: relative;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #000;
    @media (max-width: 767px) {
      -webkit-text-fill-color: #fff;
    }
  }
`
export const InputField = styled.input`
  background: rgba(255, 255, 255, 0);
  font-family: "Mulish";
  font-weight: var(--fw-medium);
  font-size: 32px;
  line-height: 1.13;
  color: var(--color-dark);
  padding: 0 5px 5px 5px;
  border-bottom: 1px solid var(--color-dark);
  width: 100%;
  display: block;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s;

  @media (max-width: 1920px) {
    font-size: calc(14px + (32 - 14) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 767px) {
    border-bottom: 1px solid var(--color-withe);
    color: var(--color-withe);
  }

  ::placeholder {
    font-family: "Mulish";
    color: var(--color-dark);
    font-size: 32px;
    @media (max-width: 1920px) {
      font-size: calc(14px + (32 - 14) * ((100vw - 390px) / (1920 - 390)));
    }
    @media (max-width: 767px) {
      color: var(--color-withe);
    }
  }

  &:focus {
    color: var(--color-dark);
    outline: none;
    @media (max-width: 767px) {
      color: white;
    }
  }
  resize: none;
  .textarea {
    background-color: initial;
    color: initial;
    font-family: initial;
    font-size: initial;
    width: 100%;
    height: 50px;
  }
`

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  left: 20px;
  color: red;
  font-size: 18px;
  @media (max-width: 1920px) {
    font-size: calc(13px + (18 - 13) * ((100vw - 390px) / (1920 - 390)));
    bottom: calc(-15px + (-20 - -15) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const Button = styled.button`
  font-family: "Mulish";
  display: flex;
  align-items: center;
  column-gap: 25px;
  font-weight: var(--fw-semiBold);
  font-size: 36px;
  line-height: 1.14;
  color: var(--color-dark);
  align-self: flex-end;
  transition: color 0.3s;
  cursor: pointer;
  :hover {
    color: var(--color-ogange-border);
    span {
      svg {
        path {
          transition: all 0.3s;
          fill: var(--color-ogange-border);
        }
      }
    }
  }
  @media (max-width: 1920px) {
    font-size: calc(18px + (36 - 18) * ((100vw - 390px) / (1920 - 390)));
  }
  @media (max-width: 767px) {
    color: var(--color-withe);
    column-gap: 15px;
    svg {
      display: none;
    }
  }
`
