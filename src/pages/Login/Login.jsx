//CSS
import styles from './login.module.css'

import { getLogin } from '../../utils/api'


/**
 * @function Login
 * @export
 * @description page Login
 * @return {HTMLElement} component generated HTML
 */
export default function Login() {

    /******TEST *********** */
    let email = "steve@rogers.com"
    let password = "password456"
    const login = getLogin({"email": email, "password": password})
    console.log("login response :", login)


    return(
        <div className={styles.container}>
          <main className={`${styles.main} ${styles.bgDark}`}>
            <section className={styles.signInContent}>
              <i className="fa fa-user-circle"></i>
              <h1>Sign In</h1>
              <form>
                <div className={styles.inputWrapper}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className={styles.inputWrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                </div>
                <div className={styles.inputRemember}>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div> {/*prévoir affichage cas erreur login */}</div>
                <button className={styles.signInButton}>Sign In</button> 
              </form>
            
            </section>




        </main>


        </div>
        



    )

}



