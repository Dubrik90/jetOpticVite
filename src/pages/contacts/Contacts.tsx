import React from "react"
import {ContactsWrapper, TitleContacts} from "./style"
import { Container } from "../../common/style/global"
import {MapComponent} from "./map/Map";

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <Container>
          <TitleContacts>Контакты</TitleContacts>
            <MapComponent/>
      </Container>
    </ContactsWrapper>
  )
}
