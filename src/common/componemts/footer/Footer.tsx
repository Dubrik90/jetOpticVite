import React from "react"
import {FooterContent, FooterWrapper, LogoFooterWrapper, Partner, SocialIcons} from "./style"
import { Container } from "../../style/global"
import { onClickUpHandler } from "../logo/Logo"
import PhoneIc from "./assets/phone.png"
import WhatsappIc from "./assets/wat.png"
import InstaIc from "./assets/imsta.png"
import YuoTubeIc from "./assets/yuoT.png"
import EmailIc from "./assets/mail.png"
import { ROUTS } from "../../constans/routs"
import { LogoWrapper } from "../logo/style"
import { Link } from "react-router-dom"

export const Footer = () => {
  const socialLinks = [
    { id: "0", scr: PhoneIc },
    { id: "1", scr: WhatsappIc },
    { id: "2", scr: InstaIc },
    { id: "3", scr: YuoTubeIc },
    { id: "4", scr: EmailIc },
  ]
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <LogoFooterWrapper onClick={onClickUpHandler}>
            <Link to={ROUTS.HOME}>
              Техника <span>Красоты</span>
            </Link>
          </LogoFooterWrapper>
          <SocialIcons>
            {socialLinks.map((el) => (
              <img
                key={el.id}
                src={el.scr}
                width={"70px"}
                height={"70px"}
                alt="icon"
              />
            ))}
          </SocialIcons>
          <Partner>
            Ваш надежный партнер{" "}
            <a href="https://www.tekhnikakrasoty.ru/" target={"_blank"}>
              tekhnikakrasoty.ru
            </a>
          </Partner>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}
