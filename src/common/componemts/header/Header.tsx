import React from "react"
import { HeaderContent, HeaderWrapper } from "./style"
import { Container } from "../../style/global"
import { Logo } from "../logo/Logo"
import { Menu } from "./menu/Menu"

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo />
          <Menu />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}
