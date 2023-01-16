//CSS
import styles from './header.module.css'
// components
import {Link} from "react-router-dom"
import { useSelector} from "react-redux"
// import { getFirstName } from "../../redux/features/firstName"
// import { token } from "../../redux/features/token"
//logo
import logo from '../../assets/argentBankLogo.png'


export default function Header() {

     // Use Selector for recover : firstName and Token (store)
     const firstName = useSelector((state) => state.firstName.value)
     console.log("firsName state:",firstName)
     const token = useSelector((state) => state.token.value)
     console.log("token state:",token)


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
            { token === null && 
            <Link to='/login' className={styles.mainNavItem}>
                <i className="fa fa-user-circle"></i>
                   <span className={styles.signIn}>Sign In</span>           
            </Link> }
            {/*user connected*/}  
            { token !== null && 
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
