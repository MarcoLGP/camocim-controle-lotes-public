import { createSlice } from "@reduxjs/toolkit";

export interface ordersProps {
    company: string,
    budget_number: string,
    finalized: boolean
}

interface ordersState {
    finalizedOrders: Array<ordersProps>,
    productionOrders: Array<ordersProps>
}

const initialState = { finalizedOrders: [{}], productionOrders: [{}] } as ordersState

export const finalizedOrders = createSlice({
    name: 'finalizedOrders',
    initialState,
    reducers: {
        setFinalizedOrders: (state, { payload }) => {
            state.finalizedOrders.unshift(payload)
        },
        setProductionOrders: (state, { payload }) => {
            state.productionOrders.unshift(payload)
        }
    }
})

export const { setFinalizedOrders, setProductionOrders } = finalizedOrders.actions
export default finalizedOrders.reducer