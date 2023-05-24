import { ROUTS } from "./common/constans/routs"
import { Layout } from "./common/componemts/layout/Layout"
import { Home } from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTS.HOME} element={<Layout />}>
        <Route path={ROUTS.HOME} element={<Home />} />
        {/*<Route path={ROUTS.ABOUT} element={<About/>}/>*/}
        {/*<Route path={ROUTS.CONTACTS} element={<Contacts/>}/>*/}
      </Route>
    </Routes>
  )
}

