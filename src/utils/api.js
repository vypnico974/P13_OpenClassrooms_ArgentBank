// proptypes
import PropTypes from 'prop-types'

// API base URL
const BASE_URL = "http://localhost:3001/api/v1/"

// error message
const ERROR_MESSAGE = "Error. Please retry later."



/**
 * @function getLoginData
 * @export
 * @description get login data (model)
 * @param {object} data - data login
 * @return {object} object login data format
 */
export function getLoginData(data) {
    if(data) {
         //if no connection error
        if((data.status !== 400) && (data.status !== 401) && (data.status !== 500)) {
            const obj = {
                status: data.status,
                message: data.message,
                token: data.body.token
            }    
            return obj
        //if connection error
        } else {
            const obj = {
                status: data.status,
                message: data.message,
            }
            console.log(obj.status,obj.message)    
            return obj
        }
    }  
}
getLoginData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function getLoginFetchData
 * @export
 * @description get login fetch (model)
 * @param {object}  data - user login fetch data
 * @return {object} object login fetch format
 */
export function getLoginFetchData(data) {
    if (data){
        if(data.body !== undefined) {
            const obj = {
                id: data.body.id,
                status: data.status,
                email: data.body.email,
                firstName: data.body.firstName,
                lastName: data.body.lastName
            }
            return obj
        } else {
            console.log(data.status, "unauthorized") 
            const obj = {
                id: null,
                status: 0,
                email: "",
                firstName: "",
                lastName: ""
            }   
         return obj
        }
    }   
}
getLoginData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function saveUserProfilData
 * @export
 * @description get login fetch data (model). 
 * @param {object}  data - save user profil data
 * @return {object} object user profil data format
 */
export function saveUserProfilData(data) {
    if (data) {
        if((data.status !== 400) && (data.status !== 401) && (data.status !== 500)){
            const obj = {
                status: data.status,
                message: data.message,
            }
            return obj
        }
        else{
            const obj = {
                status: 404,
                message: "Error",
            }
            return obj
        } 
    }  
}
saveUserProfilData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function getLogin
 * @export
 * @description get user login. Send a POST request to the API
 *  with the user's email and password, and returns the response as a JSON object.
 * @param {object} identifiants - user identifiants 
 * @return {object} login response
 */
export const getLogin = async (identifiants) => {
    const API_URL = BASE_URL + "user/login"
   
    const loginResponse = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        }
        
    }).then((response) => response.json())
    .catch((error)=> alert(ERROR_MESSAGE + error))

    // response login format
    return await getLoginData(loginResponse) 
}
saveUserProfilData.prototype = {
    data: PropTypes.object.isRequired,
}



/**
 * @function getLoginFetch
 * @export
 * @description user login fetch data. Send a POST request to the API
 *  with the token in the header, and return the response as a JSON object.
 * @param {object} token - token 
 * @return {object} login response
 */
export const getLoginFetch = async (token) => {
   // console.log(typeof(token))
    const API_URL = BASE_URL + "user/profile"

    const loginFetchResponse = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        }        
    }).then((response) => response.json())
    .catch((error)=> alert(ERROR_MESSAGE + error))

    // response login format
    return await getLoginFetchData(loginFetchResponse)
}
getLoginFetch.prototype = {
    token: PropTypes.object.isRequired,
}


/**
 * @function saveUserProfil
 * @export
 * @description save profil : user the new full name. Take the first name and the last name and
 *  sent from the Edit Form and the login token as parameters, build a request body
 *  with the new user name and send a PUT request to the API to change it in database.
 * @param {object} token - token 
 * @return {object} login response
 */
export const saveUserProfil = async (token, fullName) => {
    const URL_API = BASE_URL + "user/profile"

    const saveUserProfilResponse = await fetch(URL_API, {
        method: "PUT",
        body: JSON.stringify(fullName),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        }     
    }).then((response) => response.json())
    .catch((error)=> alert(ERROR_MESSAGE + error))
        
    // response save user profil data format 
    return await saveUserProfilData(saveUserProfilResponse)
}
saveUserProfil.prototype = {
    token: PropTypes.object.isRequired,
}