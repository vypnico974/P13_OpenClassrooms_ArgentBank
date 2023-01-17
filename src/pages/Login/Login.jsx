//css
import styles from './login.module.css'

import { useState} from "react" 
import { useSelector,useDispatch } from "react-redux"
import { getLogin } from '../../utils/api'
import { getToken } from '../../redux/features/token'
import { Navigate } from "react-router-dom";


/**
 * @function Login
 * @export
 * @description page Login
 * @param
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
    const token = useSelector((state) => state.token.value)
    // local storage Token
    const localStorageToken =  localStorage.getItem("token")
   

    // Add the token
     const dispatch = useDispatch()
     const tokenAdd = (token) => {
         if(remember === true) {
            localStorage.setItem("token", token)
         }
         //to send the action getToken
        dispatch(getToken(token))
    }

     // Handle Remember
     const handleRemember = (event) => {
        setRemember(event.target.checked);
    }

    /**
     * @function Login
     * @export
     * @description  handle submit page Login
     * @param {object}
     * @return {HTMLElement} component generated HTML
    */
    const handleSubmit = (event) => {
        event.preventDefault()
        const login = getLogin({"email": email, "password": password})       
        login.then(obj => {
            if(obj.status !== 400) {
                setLoginStatus(obj.status)
                console.log("obj token :", obj.token)
                tokenAdd(obj.token)
            } else {
                setLoginErreur(obj.message)
            }
        })
        console.log("login obj :", login)
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



