import { configureStore } from "@reduxjs/toolkit"

// redux slice 
import firstNameReducer from "./features/firstName"
import lastNameReducer from "./features/lastName"
import tokenReducer from "./features/token"

/* configureStore :  create the Redux store 
store : assemble state, action and reducer */
export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        token: tokenReducer
    },
})