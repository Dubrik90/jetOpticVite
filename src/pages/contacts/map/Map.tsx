import React from "react"
import {
  CardWrapper,
  ContactBlock,
  MapWrapper,
  StyledMap,
  SubTitle,
  TitleContacts,
} from "./style"
import { GeoObject, Placemark, YMaps } from "react-yandex-maps"

export const MapComponent = () => {
  const mapState = { center: [52.228543, 20.99856], zoom: 16 }
  const coordinates = [52.228543, 20.99856]
  const placemarkProperties = {
    balloonContent: "Лиговский проспект 50М",
  }

  return (
    <>
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
    </>
  )
}
