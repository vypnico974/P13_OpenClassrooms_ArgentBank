//react
import * as React from "react"
import { Routes, Route } from "react-router-dom"
//components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//pages
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Error from "./pages/Error/Error"
import Profil from "./pages/Profil/Profil"
import Logout from "./pages/Logout/Logout"
//css
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
    <Header/>  {/* Header for every page */}

    <Routes> {/* the differents routes for this website  */}
        <Route exact path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/profil" element={<Profil />} /> 
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
    </Routes>

    <Footer text="Copyright 2020 Argent Bank" />   {/* Footer for every page */}
   </>
  )
}

