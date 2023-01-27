import { createSlice } from "@reduxjs/toolkit"

// first name initial state
const initialState = {
    value: ""
}

/* creating a slice of the store : allows to define
 action and reducer for firstName */
export const firstNameSlice = createSlice({
    // slice name
    name: "firstName",
    // initial state
    initialState,
    // action and reducer
    reducers: {
        // getFirstName action ('firstName/getFirstName')
        getFirstName: (state, action) => {
            state.value = action.payload
        },
    },
})
// export action : getFirstName
export const { getFirstName } = firstNameSlice.actions
// export the reducer as default export
export default firstNameSlice.reducer