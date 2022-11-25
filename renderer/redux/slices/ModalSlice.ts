import { createSlice } from "@reduxjs/toolkit";

interface modalsSlices {
    openModalWarningCoffesToRoast: false
}

const initialState = { openModalWarningCoffesToRoast: false } as modalsSlices

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpenModalWarningCoffesToRoast: (state, { payload }) => {
            state.openModalWarningCoffesToRoast = payload
        }
    }
})

export const { setOpenModalWarningCoffesToRoast } = modal.actions
export default modal.reducer