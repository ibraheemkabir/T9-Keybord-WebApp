import {combineReducers} from '@reduxjs/toolkit';
import {inputSlice} from './slices/inputSlice';

export const rootReducer = combineReducers({
    inputView: inputSlice.reducer
})