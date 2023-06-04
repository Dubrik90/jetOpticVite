import React from "react"
import {
  ContactBlock,
  MapComponentWrapper,
  MapWrapper,
  StyledMap,
  SubTitle,
  TitleContacts,
} from "./style"
import { Placemark, YMaps } from "react-yandex-maps"

export const MapComponent = () => {
  const mapState = { center: [59.923423, 30.363596], zoom: 16 }
  const coordinates = [59.923423, 30.363596]
  const placemarkProperties = {
    balloonContent: "Лиговский проспект 50М",
  }

  return (
    <MapComponentWrapper>
      <ContactBlock>
        <TitleContacts>Находимся по адресу:</TitleContacts>
        <SubTitle>
          Россия, г. Санкт-Петербург, Лиговский <br /> проспект 50М корпус 11
          офис 9Н
        </SubTitle>
      </ContactBlock>
      <MapWrapper>
        <YMaps>
          <StyledMap state={mapState}>
            <Placemark
              geometry={coordinates}
              properties={placemarkProperties}
            />
          </StyledMap>
        </YMaps>
      </MapWrapper>
    </MapComponentWrapper>
  )
}
