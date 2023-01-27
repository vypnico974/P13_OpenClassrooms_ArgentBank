//react
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
//react-redux
import { useDispatch } from "react-redux"
//redux actions
import { getToken } from "../../redux/features/token"
import { getFirstName } from "../../redux/features/firstName"
import { getLastName } from "../../redux/features/lastName"

/**
 * @function Logout
 * @export
 * @description logout ,reset store and remove localStorage token
 * @return {HTMLElement} return home page
 */
export default function Logout() {

    const dispatch = useDispatch()
    useEffect(() => {
        // to send next actions
        dispatch(getToken(null))
        dispatch(getFirstName(""))
        dispatch(getLastName(""))
        // remove localStorage token
        localStorage.removeItem("token")
    })
    
    // Redirection : home page
    return <Navigate to="/" /> 
}


