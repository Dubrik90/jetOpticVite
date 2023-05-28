import React from "react"
import {
  FooterContent,
  FooterWrapper,
  LogoFooterWrapper,
  Partner,
} from "./style"
import { Container } from "../../style/global"
import { onClickUpHandler } from "../logo/Logo"

import { ROUTS } from "../../constans/routs"
import { Link } from "react-router-dom"
import { SocialLinks } from "./socialLinks/SocialLinks"

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <LogoFooterWrapper onClick={onClickUpHandler}>
            <Link to={ROUTS.HOME}>
              Техника <span>Красоты</span>
            </Link>
          </LogoFooterWrapper>
          <SocialLinks
            phoneNumber={"8 800 201 96 70"}
            whatsapp={""}
            instagram={"@jetoptic"}
            youtube={"- @jetOptic"}
            email={"tekhnikakrasoty@mail.ru(e-mail)"}
          />
          <Partner>
            Ваш надежный партнер
            <a href="https://www.tekhnikakrasoty.ru/" target={"_blank"}>
              tekhnikakrasoty.ru
            </a>
          </Partner>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}
