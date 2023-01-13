import * as React from "react"
import { Routes, Route } from "react-router-dom"
//components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//pages
import Home from "./pages/Home/Home"
//CSS
import './styles/normalize.css'
import './styles/global.css'


export default function App() {
  return (
   <>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
    </Routes>
    <Footer text="Copyright 2020 Argent Bank" />
   </>
  )
}

