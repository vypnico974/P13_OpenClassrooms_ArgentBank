import { createSlice } from "@reduxjs/toolkit"

// token initial state
const initialState = {
    value: localStorage.getItem("token") || null
}

// creating a slice of the store : : allows to define action and reducer for token
export const tokenSlice = createSlice({
    // slice name
    name: "token",
    // initial state
    initialState,
   // action and reducer
    reducers: {
        // getToken action ('token/getToken')
        getToken: (state, action) => {
            state.value = action.payload
        },
    },
})

// export action : getToken
export const { getToken } = tokenSlice.actions
// export the reducer as default export
export default tokenSlice.reducer
