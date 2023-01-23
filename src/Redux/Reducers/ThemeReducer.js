import { createReducer } from '@reduxjs/toolkit';
import { ChangeTheme } from '../Actions/Action';


export const ThemeReducer = createReducer(false, (builder) => {
    builder.addCase(ChangeTheme, (state, action) => state = action.payload)
})