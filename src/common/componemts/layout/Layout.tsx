import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { MainWrapper } from "./style"

export const Layout = () => {
  return (
    <>
      {/*<ScrollToTop/>*/}
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  )
}
