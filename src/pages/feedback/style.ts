import styled from "styled-components"

export const FeedbackWrapper = styled.div`
  padding-top: 199px;
  padding-bottom: 50px;
  background: linear-gradient(
    90.38deg,
    rgba(95, 74, 1, 0.4) 0.29%,
    rgba(217, 217, 217, 0) 98.48%
  );
  @media (max-width: 1920px) {
    padding-top: calc(70px + (199 - 70) * ((100vw - 390px) / (1920 - 390)));
  }
`
export const ContactFormContainer = styled.div`
  padding: 66px 61px 100px 48px;
  width: 955px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  @media (max-width: 1920px) {
    padding: calc(50px + (66 - 50) * ((100vw - 768px) / (1920 - 768)))
      calc(43px + (61 - 43) * ((100vw - 768px) / (1920 - 768)))
      calc(52px + (100 - 52) * ((100vw - 768px) / (1920 - 768)))
      calc(44px + (48 - 44) * ((100vw - 768px) / (1920 - 768)));
    width: calc(407px + (955 - 407) * ((100vw - 768px) / (1920 - 768)));
  }
  

  form {
    display: flex;
    flex-direction: column;
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
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  margin-bottom: 70px;
`
export const InputContainer = styled.div`
  position: relative;
`
