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
import { Link } from "react-router-dom"
import { ROUTS } from "../../constans/routs"

export const BarBottom = () => {
  return (
    <BarFoot>
      <Container>
        <Content>
          <Link to={ROUTS.FEEDBACK}>
            <RequestCall>Закажите звонок</RequestCall>
          </Link>
          <Link to={ROUTS.FEEDBACK}>
            <MessageIconContainer>
              <img
                src={Massage}
                alt="Message Icon"
                width="100%"
                height="100%"
                loading={"lazy"}
              />
              <CircleBadge>
                <BadgeText>1</BadgeText>
              </CircleBadge>
            </MessageIconContainer>
          </Link>
        </Content>
      </Container>
    </BarFoot>
  )
}
