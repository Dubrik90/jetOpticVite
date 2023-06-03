import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import {ContactFormContainer, FeedbackWrapper, FormContainer, InputContainer, TitleForm} from "./style"
import { Container } from "../../common/style/global"

// Определение схемы валидации с Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Имя обязательно"),
  contact: Yup.string().required("Телефон или email обязательны"),
  message: Yup.string().required("Сообщение обязательно"),
})


const InputField = styled.input`
  background: rgba(255, 255, 255, 0);
  font-family: "Mulish";
  font-weight: var(--fw-medium);
  font-size: 32px;
  line-height: 1.13;
  color: #000000;
  padding: 0 5px 5px 5px;
  border-bottom: 1px solid #000000;
  width: 100%;
  display: block;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s;
  @media (max-width: 1920px) {
    font-size: calc(14px + (23 - 14) * ((100vw - 390px) / (1920 - 390)));
  }

  ::placeholder {
    font-family: "Mulish";
    color: var(--color-dark);
    font-size: 32px;
    @media (max-width: 1920px) {
      font-size: calc(14px + (23 - 14) * ((100vw - 390px) / (1920 - 390)));
    }
  }

  &:focus {
    color: var(--color-dark);
    outline: none;
  }
`

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  left: 20px;
  color: red;
  font-size: 18px;
`

const Button = styled.button`
  ont-family: 'Mulish';
  font-weight: var(--fw-semiBold);
  font-size: 36px;
  line-height: 1.14;
  color: #000000;
  align-self: flex-end;
  transition: color 0.3s;
  cursor: pointer;
  :hover {
    color: var(--color-ogange-border);
  }
  @media (max-width: 1920px) {
    font-size: calc(18px + (36 - 18) * ((100vw - 390px) / (1920 - 390)));
  }
`

export const Feedback: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values) // Здесь можно добавить логику для отправки данных на сервер
    },
  })

  return (
    <FeedbackWrapper>
      <Container>
        <ContactFormContainer>
          <TitleForm>Обратная связь</TitleForm>
          <form onSubmit={formik.handleSubmit}>
            <FormContainer>
              <InputContainer>
                <InputField
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <ErrorMessage>{formik.errors.name}</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <InputField
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Телефон или email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <ErrorMessage>{formik.errors.contact}</ErrorMessage>
                )}
              </InputContainer>
              <InputContainer>
                <InputField
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Сообщение"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <ErrorMessage>{formik.errors.message}</ErrorMessage>
                )}
              </InputContainer>
            </FormContainer>
            <Button type="submit">Отправить</Button>
          </form>
        </ContactFormContainer>
      </Container>
    </FeedbackWrapper>
  )
}
