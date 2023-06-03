import React from "react"
import { ContactsBlock, ContactsWrapper, TitleContacts } from "./style"
import { Container } from "../../common/style/global"
import { MapComponent } from "./map/Map"
import { LinksBlock } from "./links-block/LinksBlock"

export const Contacts = () => {
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
