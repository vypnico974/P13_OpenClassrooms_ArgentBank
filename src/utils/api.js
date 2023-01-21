// proptypes
import PropTypes from 'prop-types'

// API base URL
const BASE_URL = "http://localhost:3001/api/v1/"


/**
 * @function getLoginData
 * @export
 * @description get login data
 * @param {object} data - data login
 * @return {object} object login data format
 */
export function getLoginData(data) {
    //if no connection error to the web server
    if(data.status !== 400) {
        const obj = {
            status: data.status,
            message: data.message,
            token: data.body.token
        }    
        return obj
       //if connection error to the web server
    } else {
        const obj = {
            status: data.status,
            message: data.message,
        }
        console.log(obj.status,obj.message)    
        return obj
    }
}
getLoginData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function getLoginFetchData
 * @export
 * @description get login fetch
 * @param {object}  data - user login fetch data
 * @return {object} object login fetch format
 */
export function getLoginFetchData(data) {
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
        console.log(data.status, data.status) 
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
getLoginData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function saveUserProfilData
 * @export
 * @description get login fetch
 * @param {object}  data - save user profil data
 * @return {object} object user profil data format
 */
export function saveUserProfilData(data) {
    const obj = {
        status: data.status,
        message: data.message,
    }
    console.log(data.status, data.message )
    return obj
}
saveUserProfilData.prototype = {
    data: PropTypes.object.isRequired,
}


/**
 * @function getLogin
 * @export
 * @description get user login
 * @param {object} identifiants - user identifiants 
 * @return {object} login response
 */
export const getLogin = async (identifiants) => {
    const API_URL = BASE_URL + "user/login"
   // console.log(API_URL)

    const loginResponse = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        }
        
    }).then((response) => response.json())

    // response login format
    return await getLoginData(loginResponse) 
}
saveUserProfilData.prototype = {
    data: PropTypes.object.isRequired,
}



/**
 * @function getLoginFetch
 * @export
 * @description user login  fetch data
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

   // console.log("getLoginFetch response", loginFetchResponse)
    // response login format
    return await getLoginFetchData(loginFetchResponse)
}
getLoginFetch.prototype = {
    token: PropTypes.object.isRequired,
}


/**
 * @function saveUserProfil
 * @export
 * @description save profil : user the new full name 
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
    }).then((response) => response.json());

     // response save user profil data format 
    return await saveUserProfilData(saveUserProfilResponse)
}
saveUserProfil.prototype = {
    token: PropTypes.object.isRequired,
}