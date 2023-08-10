import { createSlice } from "@reduxjs/toolkit";

const createNewPostSlice = createSlice({
    name: 'overlay',
    initialState: {
        isShowCreateNewPost: false,
        step: 'first'
    },
    reducers: {
        showCreateNewPost: (state) => { state.isShowCreateNewPost = true },
        hideCreateNewPost: (state) => { state.isShowCreateNewPost = false },
        setStepOfCreateNewPost: (state, action) => { state.step = action.payload }
    }
})

export const { showCreateNewPost, hideCreateNewPost, setStepOfCreateNewPost } = createNewPostSlice.actions
export default createNewPostSlice.reducer