import React from "react"
import { BarLinksBlock, BarLinksWrap } from "./style"
import WhatsappIc from "../footer/assets/wat.png"
import InstaIc from "../footer/assets/imsta.png"
import YuoTubeIc from "../footer/assets/yuoT.png"
import EmailIc from "../footer/assets/mail.png"
import { SocialLinksProps } from "../../types/type"
import { Container } from "../../style/global"

export const BarLinks: React.FC<SocialLinksProps> = ({
  whatsapp,
  instagram,
  youtube,
  email,
}) => {
  return (
    <BarLinksWrap>
      <Container>
        <BarLinksBlock>
          {/*<BarLinksWrapper>*/}
          <a target={"_blank"} href={`https://wa.me/${whatsapp}`}>
            <img src={WhatsappIc} alt="WhatsApp" />
          </a>
          <a target={"_blank"} href={`https://www.instagram.com/${instagram}`}>
            <img src={InstaIc} alt="Instagram" />
          </a>
          <a target={"_blank"} href={`https://www.youtube.com/${youtube}`}>
            <img src={YuoTubeIc} alt="YouTube" />
          </a>
          <a target={"_blank"} href={`mailto:${email}`}>
            <img src={EmailIc} alt="Email" />
          </a>
          {/*</BarLinksWrapper>*/}
        </BarLinksBlock>
      </Container>
    </BarLinksWrap>
  )
}
