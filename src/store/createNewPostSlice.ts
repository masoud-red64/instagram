import { createSlice } from "@reduxjs/toolkit";

const createNewPostSlice = createSlice({
    name: 'overlay',
    initialState: {
        isShowCreateNewPost: false
    },
    reducers: {
        showCreateNewPost: (state) => { state.isShowCreateNewPost = true },
        hideCreateNewPost: (state) => { state.isShowCreateNewPost = false },
    }
})

export const { showCreateNewPost, hideCreateNewPost } = createNewPostSlice.actions
export default createNewPostSlice.reducer