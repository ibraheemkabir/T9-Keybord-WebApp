import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name:'inputSlice',
    initialState: {
        input: '',
        suggestions: [],
        wordSuggestions: [],
        combinations: [],
    },
    reducers: {
        inputChanged: (state, action) => {
            state.input = state.input+action.payload.value
        },
        clearInput: (state, action) => {
            state.input = '',
            state.wordSuggestions=[],
            state.combinations = []
        },
        backSpace: (state,action) => {
            const popped = state.input.slice(0, -1)
            state.input = popped
        },
        populateSuggestions: (state,action) => {
            state.suggestions= action.payload.value.combinations.concat(action.payload.value.possibleWords),
            state.wordSuggestions = action.payload.value.possibleWords,
            state.combinations = action.payload.value.combinations
        },
        addSelection: (state,action) => {
            state.input = action.payload.value
        },
    }
})

export const InputActions = inputSlice.actions;