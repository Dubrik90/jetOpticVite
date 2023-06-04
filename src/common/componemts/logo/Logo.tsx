import React from "react"
import { LogoWrapper } from "./style"
import { ROUTS } from "../../constans/routs"
import { Link } from "react-router-dom"
export const onClickUpHandler = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}
export const Logo = () => {
  return (
    <LogoWrapper onClick={onClickUpHandler}>
      <Link to={ROUTS.HOME}>
        Техника <span>Красоты</span>
      </Link>
    </LogoWrapper>
  )
}
