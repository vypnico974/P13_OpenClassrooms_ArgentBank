import { createSlice } from "@reduxjs/toolkit"

// last name initial state
const initialState = {
    value: ""
}

// creating a slice of the store : : allows to define action and reducer for token
export const lastNameSlice = createSlice({
    //slice name
    name: "lastName",
    // initial state
    initialState,
    // action and reducer
    reducers: {
        // getLastName action ('lastName/getLastName')
        getLastName: (state, action) => {
            state.value = action.payload
        },
    },
})

// export action : getLastName
export const { getLastName } = lastNameSlice.actions
// export the reducer as default export
export default lastNameSlice.reducer