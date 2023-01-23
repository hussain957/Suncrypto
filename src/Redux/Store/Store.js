
import { configureStore } from '@reduxjs/toolkit'
import { ThemeReducer } from '../Reducers/ThemeReducer'


export const store = configureStore({
    reducer: { ThemeReducer },
})