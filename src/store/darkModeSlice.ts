import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        isDarkMode: localStorage.getItem("theme") === "dark" ? true : false
    },
    reducers: {
        toggleDarkMode: (state,action) => { state.isDarkMode = action.payload }
    }
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
