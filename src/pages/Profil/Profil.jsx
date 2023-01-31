/* css  */
import styles from './profil.module.css'
// prop types
import PropTypes from 'prop-types'
//react
import { useState , useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
// api data
import { getLoginFetch } from '../../utils/api'
import { saveUserProfil } from '../../utils/api'
// redux actions
import { getFirstName } from '../../redux/features/firstName'
import { getLastName } from '../../redux/features/lastName'
//redux selectors
import { selectToken } from '../../redux/selectors'
import { selectFirstName } from '../../redux/selectors'
import { selectLastName } from '../../redux/selectors'
//mock user account
import ACCOUNTS_MOCKED from '../../__mocks__/accountsMock'
// account component
import Account from '../../components/Account/Account'


/**
 * @function Profil
 * @export
 * @description profil page 
 * @return {HTMLElement} component generated HTML
 */
export default function Profil() {

   // Use Selector for extract :token, firstName and lastName (store)
  const token = useSelector(selectToken)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)
  //Use state
  const [ProfilEdit, setProfilEdit] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [formatErrorName, setFormatErrorName] = useState('')
  // Use dispatch, for send the actions
  const dispatch = useDispatch()
  // At least 2 alphabetic characters
  const regex = /^[A-zÀ-ú-']{2,}$/

  

  //Use effect
  useEffect(() => {
    // if user connected, extract in store : firstName and lastName
    if (token !== null) {
       // user login fetch data
      const user = getLoginFetch(token)
      //console.log("user:",user)
      user.then(obj => {
        //To send the actions : getFirstName and getLastName
        dispatch(getFirstName(obj.firstName))
        dispatch(getLastName(obj.lastName))
      })
    } 
  },)  // remove dependecy array [token, dispatch]


  /**
   * @function handleEditSave
   * @export
   * @description handle form save edit
   * @param {object} e - event
   * @return {HTMLElement} component generated HTML
  */
  const handleEditSave = (e) => {
    e.preventDefault() 
    // input format test : at least 2 alphabetic characters
    if (!regex.test(newFirstName) || !regex.test(newLastName)    )
    {
      setProfilEdit(true) //no close form
      setFormatErrorName("at least 2 alphabetic characters")
    }else{
      if( (newFirstName!== firstName) || (newLastName!== lastName)){
        const fullName = {"firstName": newFirstName, "lastName": newLastName}
        // save  user profil data
        saveUserProfil(token, fullName)
        }        
      setFormatErrorName("")
      setProfilEdit(false) //close form
    }
  }
  handleEditSave.prototype = {
    e: PropTypes.object.isRequired,
  }


   /**
   * @function handleCancel
   * @export
   * @description handle cancel :  form, close form
   * @param {object} e - event
   * @return {} 
  */
  const handleCancel = (e) => {
    e.preventDefault()
    setFormatErrorName("")
    setProfilEdit(false) //close form
  }
  handleCancel.prototype = {
    e: PropTypes.object.isRequired,
  }    

  // if no authorize, redirection login page
  if (token === null) return <Navigate to="/login" />
  
  return (
    <main className={`${styles.main} ${styles.bgDark}`}>
      <div className={styles.header}>
        { ProfilEdit ? ( 
          <>  {/* open form  */}
            <h1 className={styles.title}>Welcome back</h1>
            <div className={styles.editContainer}>
              <form id="edit">
                <div className={styles.inputContainer}>
                  <input type="text"
                  id = "firstName"
                  // defaultValue={firstName}
                  placeholder={firstName} 
                  onChange={(e) => setNewFirstName(e.target.value)}
                  />
                  <input type="text"
                  id = "lastName"
                  //  defaultValue={lastName}
                  placeholder={lastName} 
                  onChange={(e) => setNewLastName(e.target.value)}
                  />                
                </div>
                <p className={styles.error}>{formatErrorName}</p>
                <div className={styles.buttomContainer}>
                  <button className={styles.editButton} onClick={handleEditSave}>
                  Save</button>
                  <button className={styles.editButton} onClick={handleCancel}>
                  Cancel</button>
                </div>
              </form>
            </div>
          </>
        ) : ( 
          <> {/* no open form  */}
            <h1 className={styles.title}> Welcome back
                 <br />{firstName} {lastName}!</h1>
            <button className={styles.editButton} onClick={() => setProfilEdit(true)}>
              Edit Name</button>
          </>
        ) }
      </div> 

      <h2 className={styles.srOnly}>Accounts</h2> 
      
      {/*  mock data : user account */}
      {ACCOUNTS_MOCKED.map((data) => (           
          <Account
          key={data.id}
          title={data.title}
          money={data.money}
          balanceType={data.balanceType}
        />
        ))}
        <div className={styles.buttonContainer}></div>
    </main>
  )
}