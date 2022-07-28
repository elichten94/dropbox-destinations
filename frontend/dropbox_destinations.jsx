import ReactDOM from "react-dom"
import React from "react"
import Root from './root.jsx'
import configureStore from "./components/store/store.jsx";


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore()

    const root = document.getElementById("root")

    ReactDOM.render(<Root store={store} />,  root
    )
})