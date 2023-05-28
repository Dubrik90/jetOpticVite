import React from "react"
import { Container } from "../../style/global"
import {
  BadgeText,
  BarFoot,
  CircleBadge,
  Content,
  MessageIconContainer,
  RequestCall,
} from "./style"
import Massage from "../social-links-bar/assets/massage.svg"

export const BarBottom = () => {
  return (
    <BarFoot>
      <Container>
        <Content>
          <RequestCall>Закажите звонок</RequestCall>
          <MessageIconContainer>
            <img src={Massage} alt="Message Icon" width="100%" height="100%" />
            <CircleBadge>
              <BadgeText>1</BadgeText>
            </CircleBadge>
          </MessageIconContainer>
        </Content>
      </Container>
    </BarFoot>
  )
}
