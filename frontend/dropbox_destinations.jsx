import ReactDOM from "react-dom"
import React from "react"
import App from "./App.jsx";
import Root from './root'
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore()

    const root = document.getElementById("root")

    ReactDOM.render(<Root store={store} />,  root
    )

    window.getState = store.getState
})