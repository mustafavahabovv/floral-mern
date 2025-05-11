import { configureStore } from '@reduxjs/toolkit'
import FloraSlice from './reducers/FloraSlice'


export const store = configureStore({
    reducer: {
        flora : FloraSlice
    },
})