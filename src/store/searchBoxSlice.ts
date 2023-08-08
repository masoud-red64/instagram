import { createSlice } from "@reduxjs/toolkit";

const searchBoxSlice = createSlice({
    name: 'searchBox',
    initialState: {
        isShow: false
    },
    reducers: {
        showSearchBox: (state) => { state.isShow = true },
        hideSearchBox: (state) => { state.isShow = false }
    }
})

export const { showSearchBox, hideSearchBox } = searchBoxSlice.actions
export default searchBoxSlice.reducer