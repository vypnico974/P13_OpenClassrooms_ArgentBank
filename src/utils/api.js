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
 * @return {object} object
 */
export function getLoginFetchData(data) {
    if(data.body !== undefined) {
        const obj = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }

        return obj;
    } else {
        const obj = {
            status: 0,
            email: "",
            firstName: "",
            lastName: ""
        }
        
        return obj
    }
}

/* Save User Profil Data */
/**
 * @function saveUserProfilData
 * @export
 * @description get login fetch
 * @param {object} 
 * @return {object} object
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
 * @param {object} 
 * @return {object} login response
 */
export const getLogin = async (identifiants) => {
    const API_URL = BASE_URL + "user/login"
   // console.log(API_URL)

    const loginResponse = await fetch(API_URL, {
        body: JSON.stringify(identifiants),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST"
    }).then((response) => response.json())

    // response login format
    return await getLoginData(loginResponse)
}