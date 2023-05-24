import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import GlobalStyles from "./common/style/global"
import { App } from "./App"
import { BrowserRouter, HashRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>,
)
