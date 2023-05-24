import React from "react"
import { MenuLink, MenuWrapper, PhoneLink } from "./style"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"

import PhoneIc from "./assets/phone-icon.svg"
import { MenuLinksType } from "../../../common/types/type"
import { Link } from "react-router-dom"
import { ROUTS } from "../../../common/constans/routs"

export const Menu = () => {
  const menuLinks: MenuLinksType = [
    { id: "0", link: "О нас", route: ROUTS.ABOUT },
    { id: "1", link: "Контакты", route: ROUTS.CONTACTS },
    { id: "2", link: "Обратная связь", route: ROUTS.FEEDBACK },
  ]

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
    </MenuWrapper>
  )
}
