import { createSlice } from "@reduxjs/toolkit";

const searchInputValueSlice = createSlice({
    name: 'searchInputValue',
    initialState: {
        inputValue: '',
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload
        }
    }
})

export const { setInputValue } = searchInputValueSlice.actions
export default searchInputValueSlice.reducer