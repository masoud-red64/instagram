import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: {
        isShowOverlay: false
    },
    reducers: {
        showOverlay: (state) => { state.isShowOverlay = true },
        hideOverlay: (state) => { state.isShowOverlay = false },
    }
})

export const { showOverlay, hideOverlay } = overlaySlice.actions
export default overlaySlice.reducer