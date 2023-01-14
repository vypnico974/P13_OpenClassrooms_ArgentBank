import * as React from "react"
import { Routes, Route } from "react-router-dom"
//components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//pages
import Home from "./pages/Home/Home"
import Error from "./pages/Error/Error"
//CSS
import './styles/normalize.css'
import './styles/global.css'


/**
 * @function App
 * @export
 * @description component that block structure and declaration of the differents
 *  routes for this website
 * @return {HTMLElement} component generated HTML
 */
export default function App() {
  return (
   <>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <Footer text="Copyright 2020 Argent Bank" />
   </>
  )
}

