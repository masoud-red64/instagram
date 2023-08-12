import { createSlice } from "@reduxjs/toolkit";

const createNewPostSlice = createSlice({
    name: 'overlay',
    initialState: {
        isShowCreateNewPost: false,
        step: 'first',
        isOpenModal: false,
        filters: [
            { id: 1, name: 'Aden', filter: 'hue-rotate(-20deg) contrast(.9) saturate(.85) brightness(1.2)' },
            { id: 2, name: 'Clarendon', filter: 'sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)' },
            { id: 3, name: 'Crema', filter: 'sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)' },
            { id: 4, name: 'Gingham', filter: 'contrast(1.1) brightness(1.1)' },
            { id: 5, name: 'Juno', filter: 'sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)' },
            { id: 6, name: 'Lark', filter: 'sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)' },
            { id: 7, name: 'Ludwig', filter: 'sepia(.25) contrast(1.05) brightness(1.05) saturate(2)' },
            { id: 8, name: 'Moon', filter: 'brightness(1.4) contrast(.95) saturate(0) sepia(.35)' },
            { id: 9, name: 'Original', filter: '' },
            { id: 10, name: 'Perpetua', filter: 'contrast(1.1) brightness(1.25) saturate(1.1)' },
            { id: 11, name: 'Reyes', filter: 'sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)' },
            { id: 12, name: 'Slumber', filter: 'sepia(.35) contrast(1.25) saturate(1.25)' },
        ]
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