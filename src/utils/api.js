// API base URL
const BASE_URL = "http://localhost:3001/api/v1/"

/**
 * @function getLoginData
 * @export
 * @description get login data
 * @param {object} 
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

/**
 * @function getLoginFetchData
 * @export
 * @description get login fetch
 * @param {object} 
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
        const obj = {
            id: null,
            status: 0,
            email: "",
            firstName: "",
            lastName: ""
        }   
        console.log("user no connected")       
        return obj
    }
}

/**
 * @function saveUserProfilData
 * @export
 * @description get login fetch
 * @param {object} 
 * @return {object} object user profil data format
 */
export function saveUserProfilData(data) {
    const obj = {
        status: data.status,
        message: data.message,
    }
    return obj
}



/**
 * @function getLogin
 * @export
 * @description get login
 * @param
 * @return {object} login response
 */
export const getLogin = async (identifiants) => {
    const API_URL = BASE_URL + "user/login"
   // console.log(API_URL)
   console.log("type :", typeof(identifiants))

    const loginResponse = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        }
        
    }).then((response) => response.json())

  //  console.log("getLogin response", loginResponse)
    // response login format
    return await getLoginData(loginResponse) 
}


/**
 * @function getLoginFetch
 * @export
 * @description data login user
 * @param
 * @return {object} login response
 */
export const getLoginFetch = async (token) => {
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