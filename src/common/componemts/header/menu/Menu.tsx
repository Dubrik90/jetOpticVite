import React from "react"
import { MenuLinks, MenuWrapper, PhoneLink } from "./style"
import { SvgComponent } from "../../svg-component/SvgComponent"

import PhoneIc from "./assets/phone-icon.svg"
import { MenuLinksType } from "../../../types/type"
import { Link } from "react-router-dom"
import { ROUTS } from "../../../constans/routs"

import { Burger } from "../../../style/Burger"
import { useScrollBlock } from "../../../hooks/use-scroll-block"
import { useAppDispatch } from "../../../hooks/UseDispatch"
import { setIsOpenBurgerAC } from "../../../../app/app-reduser"
import { useAppSelector } from "../../../hooks/UseSelector"

export const Menu = () => {
  const dispatch = useAppDispatch()
  const { isOpenBurger } = useAppSelector((state) => state.app)
  const menuLinks: MenuLinksType = [
    { id: "0", link: "О нас", route: ROUTS.ABOUT },
    { id: "1", link: "Контакты", route: ROUTS.CONTACTS },
    { id: "2", link: "Обратная связь", route: ROUTS.FEEDBACK },
  ]
  const [blockScroll, allowScroll] = useScrollBlock()

  const onClickOpenBurger = () => {
    if (!isOpenBurger) {
      blockScroll()
    }
    dispatch(setIsOpenBurgerAC({ isOpen: !isOpenBurger }))
    if (isOpenBurger) {
      allowScroll()
    }
  }
  const onClickCloseBurger = () => {
    allowScroll()
    dispatch(setIsOpenBurgerAC({ isOpen: false }))
  }

  return (
    <MenuWrapper>
      <MenuLinks isOpenBurger={isOpenBurger}>
        <PhoneLink href="tel:+88002019670">
          <SvgComponent src={PhoneIc} width={"40px"} height={"40px"} />
          <span>8 800 201 96 70</span>
        </PhoneLink>
        {menuLinks.map((el) => (
          <Link key={el.id} to={el.route} onClick={onClickCloseBurger}>
            {el.link}
          </Link>
        ))}
      </MenuLinks>
      <Burger isOpenBurger={isOpenBurger} onClick={onClickOpenBurger}>
        <span></span>
      </Burger>
    </MenuWrapper>
  )
}
