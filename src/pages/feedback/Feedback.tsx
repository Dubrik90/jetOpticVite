import React, { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
  Button,
  ContactFormContainer,
  ErrorMessage,
  FeedbackContent,
  FeedbackWrapper,
  FormContainer,
  ImgWrap,
  InputContainer,
  InputField,
  TitleForm,
} from "./style"
import { Container } from "../../common/style/global"
import HomeBg from "./assets/bg-feedback.png"
import FeedbackImgMobile from "./assets/bg-feedback-mobile.png"

// Определение схемы валидации с Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Имя обязательно"),
  contact: Yup.string().required("Телефон или email обязательны"),
  message: Yup.string().required("Сообщение обязательно"),
})

export const Feedback: React.FC = () => {
  useEffect(() => {
    document.title = "Feedback — Jet Optic"
  }, [])
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
    <FeedbackWrapper src={HomeBg}>
      <ImgWrap>
        <img loading={"lazy"} src={FeedbackImgMobile} alt="HomeBg" />
      </ImgWrap>
      <Container>
        <FeedbackContent>
          <ContactFormContainer>
            <TitleForm>Обратная связь</TitleForm>
            <form onSubmit={formik.handleSubmit}>
              <FormContainer>
                <InputContainer>
                  <InputField
                    type="text"
                    id="name"
                    name="name"
                    aria-required="true"
                    aria-invalid="false"
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
                    className="textarea"
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
              <Button type="submit">
                Отправить
                <span>
                  <svg
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Button>
            </form>
          </ContactFormContainer>
        </FeedbackContent>
      </Container>
    </FeedbackWrapper>
  )
}
