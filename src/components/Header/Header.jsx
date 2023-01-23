//CSS
import styles from './header.module.css'
//logo
import logo from '../../assets/argentBankLogo.png'
//react
import {Link} from "react-router-dom"
import { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
//redux
import { selectFirstName } from '../../redux/selectors'
import { selectToken } from '../../redux/selectors';
import { getFirstName } from "../../redux/features/firstName"
// api data
import { getLoginFetch } from '../../utils/api'

/**
  * @function Header
  * @export
  * @description  component : header 
  * @return {HTMLElement} component generated HTML
*/
export default function Header() {

       // Use Selector for extract: firstName and token (state)
       const firstName = useSelector(selectFirstName)
       const token = useSelector(selectToken)
   
       // Use dispatch
       const dispatch = useDispatch()
       // Use Effect
       useEffect(() => {
           if((token !== 0 ) && (token !== null )) {
              // Get data login user
               const user = getLoginFetch(token)
               user.then(obj => {
                   //To send the action : getFirstName
                   dispatch(getFirstName(obj.firstName))
               })
           }
       },[token, dispatch] )

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
                  <span className={styles.user}> {firstName}</span>  
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
