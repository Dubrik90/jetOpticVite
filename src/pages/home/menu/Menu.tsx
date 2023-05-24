import React from "react"
import { MenuLink, MenuWrapper, PhoneLink } from "./style"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"

import PhoneIc from "./assets/phone-icon.svg"
import { MenuLinksType } from "../../../common/types/type"
import { Link } from "react-router-dom"
import { ROUTS } from "../../../common/constans/routs"
import { useAppSelector } from "../../../app/hooks"
import { Burger } from "../../../common/style/Burger"
import { useScrollBlock } from "../../../common/hooks/use-scroll-block"
import { useAppDispatch } from "../../../common/hooks/UseDispatch"
import { selectOpenBurger, setIsOpenBurgerAC } from "../../../app/app-reduser"

export const Menu = () => {
  const dispatch = useAppDispatch()
  const { isOpenBurger } = useAppSelector((state) => state.app)
  console.log(isOpenBurger)
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

  return (
    <MenuWrapper>
      <PhoneLink href="tel:+88002019670">
        <SvgComponent src={PhoneIc} width={"40px"} height={"40px"} />
        <span>8 800 201 96 70</span>
      </PhoneLink>
      <MenuLink>
        {menuLinks.map((el) => (
          <Link key={el.id} to={el.route}>
            {el.link}
          </Link>
        ))}
      </MenuLink>
      <Burger isOpenBurger={isOpenBurger} onClick={onClickOpenBurger}></Burger>
    </MenuWrapper>
  )
}
