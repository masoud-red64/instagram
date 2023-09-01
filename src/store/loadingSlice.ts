import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isShowLoading: false
    },
    reducers: {
        setLoading: (state, action) => { state.isShowLoading = action.payload },
    }
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer