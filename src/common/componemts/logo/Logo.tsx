import React from "react"
import { LogoWrapper } from "./style"
import { ROUTS } from "../../constans/routs"

export const Logo = () => {
  const onClickUpHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <LogoWrapper src={ROUTS.HOME} onClick={onClickUpHandler}>
      Техника <span>Красоты</span>
    </LogoWrapper>
  )
}
