//CSS
import styles from './header.module.css'
// components
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { getFirstName } from "../../redux/features/firstName"
// import { token } from "../../redux/features/token"
// import { getToken } from '../../redux/features/token';
import { getLoginFetch } from '../../utils/api'
//logo
import logo from '../../assets/argentBankLogo.png'


export default function Header() {

       // Use Selector
       const firstName = useSelector((state) => state.firstName.value)
       const token = useSelector((state) => state.token.value)
       // local storage Token
       const localStorageToken =  localStorage.getItem("token")
       console.log("token header:", token )
       console.log("localStorageToken:",localStorageToken)
   
   
       // Use Effect
       const dispatch = useDispatch()
       useEffect(() => {
           if((token !== 0 ) && (token !== null )) {
              //
               const user = getLoginFetch(token)
               user.then(obj => {
                   dispatch(getFirstName(obj.firstName))
               })
           }
       })

    return (
        <nav className={styles.mainNav}>
            <Link to='/'>
                <img
                    className={styles.mainNavLogoImage}
                    src={logo}
                    alt="Argent Bank Logo"
                />  
                <h1 className={styles.srOnly}>Argent Bank</h1>          
            </Link>

            <div>
            {/*user no connected*/}    
            { ((token === 0) ||(token === null) ) && 
            <Link to='/login' className={styles.mainNavItem}>
                <i className="fa fa-user-circle"></i>
                   <span className={styles.signIn}>Sign In</span>           
            </Link> }
            {/*user connected*/}  
            { ((token !== 0) && (token !== null) ) && 
            <>
                <Link to="/profil" className={styles.mainNavItem}>
                    <i className="fa fa-user-circle"></i>
                    {firstName}
                </Link>
                <Link to="/logout" className={styles.mainNavItem}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </Link>
            </>
            }
            </div>
        </nav>
    )
}
