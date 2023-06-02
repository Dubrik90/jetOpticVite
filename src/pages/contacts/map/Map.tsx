import React from "react"
import {
  CardWrapper,
  ContactBlock,
  MapComponentWrapper,
  MapWrapper,
  MapWrapperBlock,
  StyledMap,
  SubTitle,
  Title,
} from "./style"
import { Placemark, YMaps } from "react-yandex-maps"

type FormikErrorType = {
  name?: string
  phone?: string
  text?: string
}

export const MapComponent = () => {
  const mapState = { center: [52.228543, 20.99856], zoom: 16 }
  const coordinates = [52.228543, 20.99856]

  return (
    <MapComponentWrapper>
      <MapWrapperBlock>
        <CardWrapper>
          <ContactBlock>
            <Title>Находимся по адресу:</Title>
            <SubTitle>
              Россия, г. Санкт-Петербург, Лиговский проспект 50М корпус 11 офис
              9Н
            </SubTitle>
          </ContactBlock>

          <MapWrapper>
            <YMaps width="100%" height="400px">
              <StyledMap state={mapState}>
                <Placemark geometry={coordinates} />
              </StyledMap>
            </YMaps>
          </MapWrapper>
        </CardWrapper>
      </MapWrapperBlock>
    </MapComponentWrapper>
  )
}
