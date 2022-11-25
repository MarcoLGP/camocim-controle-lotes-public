import { createSlice } from "@reduxjs/toolkit";

interface coffesState {
    coffes: Array<object>
}

const initialState = { coffes: [{}] } as coffesState

export const coffeSlice = createSlice({
    name: 'coffe',
    initialState,
    reducers: {
        setCoffes: (state, { payload }) => {
            state.coffes.unshift(payload)
        }
    }
})

export const { setCoffes } = coffeSlice.actions
export default coffeSlice.reducer