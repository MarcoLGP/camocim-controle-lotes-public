import { configureStore } from '@reduxjs/toolkit'
import coffesReducer from "./slices/CoffesSlice"
import finalizedOrdersReducer from './slices/OrdersSlice'
import modalReducer from "./slices/ModalSlice"
import loginReducer from "./slices/LoginSlice"

const store = configureStore({
    reducer: {
        coffes: coffesReducer,
        finalizedOrders: finalizedOrdersReducer,
        modal: modalReducer,
        login: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store