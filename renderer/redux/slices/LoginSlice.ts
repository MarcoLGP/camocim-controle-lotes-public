import { createSlice } from "@reduxjs/toolkit";

interface loginSlices {
    isLogged: false
}

const initialState = { isLogged: false } as loginSlices

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogged: (state, { payload }) => {
            console.log("foi")
            state.isLogged = payload
        }
    }
})

export const { setIsLogged } = loginSlice.actions
export default loginSlice.reducer