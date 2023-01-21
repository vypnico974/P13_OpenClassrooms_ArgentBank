//css
import styles from './login.module.css'

import PropTypes from 'prop-types'

import { useState} from "react" 
import { Navigate } from "react-router-dom"

import { getLogin } from '../../utils/api'

import { useSelector,useDispatch } from "react-redux"
import { getToken } from '../../redux/features/token'
import { selectToken } from '../../redux/selectors'


/**
 * @function Login
 * @export
 * @description page Login
 * @return {HTMLElement} component generated HTML
*/
export default function Login() {

    //use state
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [loginErreur, setLoginErreur] = useState("")
    const [loginStatus, setLoginStatus] = useState(0)

    // Use Selector for recover :token (state)
    const token = useSelector(selectToken)
    // Local storage Token
    const localStorageToken =  localStorage.getItem("token")

    // use dispatch
    const dispatch = useDispatch()

    /**
     * @function tokenAdd
     * @description Save token in the local storage or send Token (state)
     *  @param {object} event - event
     * @return {}
    */
    const tokenAdd = (token) => {
        if(remember === true) {
           // Save token in the local storage web browser
           localStorage.setItem("token", token)
        }
        //To send the action : getToken
        dispatch(getToken(token))
    }
    tokenAdd.prototype = {
        token: PropTypes.string.isRequired,
    }
     
     /**
     * @function handleRemember
     * @description  handle remember
     * @param {object} event - event
     * @return {}
    */
     const handleRemember = (event) => {
        setRemember(event.target.checked)
    }
    handleRemember.prototype = {
        event: PropTypes.object.isRequired,
    }

    /**
     * @function handleSubmit
     * @description  handle submit page Login
     * @param {object} event - form event
     * @return {HTMLElement} component generated HTML
    */
    const handleSubmit = (event) => {
        event.preventDefault()
        const login = getLogin({"email": email, "password": password})       
        login.then(obj => {
             // no connection error to the web server
            if(obj.status !== 400) {
                setLoginStatus(obj.status)
                // console.log("obj token :", obj.token)
                tokenAdd(obj.token)
             //connection error
            } else {
                setLoginErreur(obj.message)
            }
        }, [])
    }
    handleSubmit.prototype = {
        event: PropTypes.object.isRequired,
    }

    //the conditions to redirect : profil page
    if( ((token !== 0) && (token !== null)) || 
        (localStorageToken !== null) ||
        (loginStatus === 200) )  return <Navigate to="/profil" /> 

    return(
        <div className={styles.container}>
          <main className={`${styles.main} ${styles.bgDark}`}>
            <section className={styles.signInContent}>
              <i className="fa fa-user-circle"></i>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <label className={styles.bold} htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.bold} htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className={styles.inputRemember}>
                    <input type="checkbox" id="remember-me" onChange={handleRemember}  />
                    <label className={styles.labelRemember} htmlFor="remember-me">Remember me</label>
                </div>
                {/* if login error, display error message  */}
                <div className={styles.error}> {loginErreur}</div>
                <button type="submit" className={styles.signInButton} >Sign In</button> 
              </form>            
            </section>
          </main>
        </div>
    )
}



