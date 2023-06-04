import React from "react"
import PhoneIc from "../../footer/assets/phone.png"
import WhatsappIc from "../../footer/assets/wat.png"
import InstaIc from "../../footer/assets/imsta.png"
import YuoTubeIc from "../../footer/assets/yuoT.png"
import EmailIc from "../../footer/assets/mail.png"
import { SocialIcons } from "./style"
import { SocialLinksProps } from "../../../types/type"

export const SocialLinks: React.FC<SocialLinksProps> = ({
  phoneNumber,
  whatsapp,
  instagram,
  youtube,
  email,
}) => {
  return (
    <SocialIcons>
      <a href={`tel:${phoneNumber}`}>
        <img loading={"lazy"} src={PhoneIc} alt="Phone" />
      </a>
      <a target={"_blank"} href={`https://wa.me/${whatsapp}`}>
        <img loading={"lazy"} src={WhatsappIc} alt="WhatsApp" />
      </a>
      <a target={"_blank"} href={`https://www.instagram.com/${instagram}`}>
        <img loading={"lazy"} src={InstaIc} alt="Instagram" />
      </a>
      <a target={"_blank"} href={`https://www.youtube.com/${youtube}`}>
        <img loading={"lazy"} src={YuoTubeIc} alt="YouTube" />
      </a>
      <a target={"_blank"} href={`mailto:${email}`}>
        <img loading={"lazy"} src={EmailIc} alt="Email" />
      </a>
    </SocialIcons>
  )
}
