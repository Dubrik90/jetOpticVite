import React, { useEffect } from "react"
import { ContactsBlock, ContactsWrapper, TitleContacts } from "./style"
import { Container } from "../../common/style/global"
import { MapComponent } from "./map/Map"
import { LinksBlock } from "./links-block/LinksBlock"

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts — Jet Optic"
  }, [])
  return (
    <ContactsWrapper>
      <Container>
        <TitleContacts>Контакты</TitleContacts>
        <ContactsBlock>
          <MapComponent />
          <LinksBlock />
        </ContactsBlock>
      </Container>
    </ContactsWrapper>
  )
}
