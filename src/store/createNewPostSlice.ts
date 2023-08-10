import { createSlice } from "@reduxjs/toolkit";

const createNewPostSlice = createSlice({
    name: 'overlay',
    initialState: {
        isShowCreateNewPost: false,
        step: 'first',
        isOpenModal: false
    },
    reducers: {
        showCreateNewPost: (state) => { state.isShowCreateNewPost = true },
        hideCreateNewPost: (state) => { state.isShowCreateNewPost = false },
        setStepOfCreateNewPost: (state, action) => { state.step = action.payload },
        setIsOpenModal: (state, action) => { state.isOpenModal = action.payload },
    }
})

export const { showCreateNewPost, hideCreateNewPost, setStepOfCreateNewPost, setIsOpenModal } = createNewPostSlice.actions
export default createNewPostSlice.reducer