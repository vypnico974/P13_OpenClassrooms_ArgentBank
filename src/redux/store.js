import { configureStore } from "@reduxjs/toolkit"

import firstNameReducer from "./features/firstName"
import lastNameReducer from "./features/lastName"
import tokenReducer from "./features/token"

// configureStore :  create the Redux store
export const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
        token: tokenReducer
    },
})