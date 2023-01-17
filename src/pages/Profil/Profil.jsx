/* react  */
/* css  */
// import styles from './profil.module.css'

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

/**
 * @function Profil
 * @export
 * @description profil page 
 * @return {HTMLElement} component generated HTML
 */
export default function Profil() {

    const token = useSelector((state) => state.token.value)
    if ((token === 0) || (token === null) ) return <Navigate to="/login" />


  return (
    <main>
        Profil page, under construction.....
    </main>
  )
}