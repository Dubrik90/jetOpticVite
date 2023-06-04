import { ROUTS } from "./common/constans/routs"
import { Layout } from "./common/componemts/layout/Layout"
import { Home } from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"
import { About } from "./pages/about/About"
import { Contacts } from "./pages/contacts/Contacts"
import { Feedback } from "./pages/feedback/Feedback"
import { useEffect } from "react"

export const App = () => {

  return (
    <Routes>
      <Route path={ROUTS.HOME} element={<Layout />}>
        <Route path={ROUTS.HOME} element={<Home />} />
        <Route path={ROUTS.ABOUT} element={<About />} />
        <Route path={ROUTS.CONTACTS} element={<Contacts />} />
        <Route path={ROUTS.FEEDBACK} element={<Feedback />} />
      </Route>
    </Routes>
  )
}
