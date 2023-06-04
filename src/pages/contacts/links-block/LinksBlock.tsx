import React from "react"
import { BlockLinks, LinksBlockWrapper, TitleLinksBlock } from "./style"
import WhatsappIc from "../assets/watsaap.png"
import PhoneIc from "../assets/phone.png"
import InstaIc from "../assets/insta.png"
import YuoTubeIc from "../assets/yuotube.png"
import EmailIc from "../assets/email.png"

export const LinksBlock = () => {
  return (
    <LinksBlockWrapper>
      <TitleLinksBlock>Можно связаться:</TitleLinksBlock>
      <BlockLinks>
        <a href={`href="tel:+88002019670"`}>
          <img loading={"lazy"} src={PhoneIc} alt="WhatsApp" />
          <span>8 800 201 96 70</span>
        </a>
        <a target={"_blank"} href={`https://wa.me/88004515175`}>
          <img loading={"lazy"} src={WhatsappIc} alt="WhatsApp" />
          <span>8 800 451 51 75</span>
        </a>
        <a target={"_blank"} href={`https://www.instagram.com/@jetoptic`}>
          <img loading={"lazy"} src={InstaIc} alt="Instagram" />
          <span>@jetoptic</span>
        </a>
        <a target={"_blank"} href={`https://www.youtube.com/@JetOptic`}>
          <img loading={"lazy"} src={YuoTubeIc} alt="YouTube" />
          <span>@JetOptic</span>
        </a>
        <a target={"_blank"} href={`mailto:tekhnikakrasoty@mail.ru`}>
          <img loading={"lazy"} src={EmailIc} alt="Email" />
          <span>tekhnikakrasoty@mail.ru</span>
        </a>
      </BlockLinks>
    </LinksBlockWrapper>
  )
}
