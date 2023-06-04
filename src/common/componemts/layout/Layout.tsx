import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { MainWrapper } from "./style"
import { BarLinks } from "../social-links-bar/BarLinks"
import { BarBottom } from "../bar-bottom/BarBottom"
import { ScrollToTop } from "../../hooks/scrollToTop/ScrollToTop"

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <BarLinks
        whatsapp={""}
        instagram={"@jetoptic"}
        youtube={"- @jetOptic"}
        email={"tekhnikakrasoty@mail.ru(e-mail)"}
      />
      <BarBottom />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  )
}
