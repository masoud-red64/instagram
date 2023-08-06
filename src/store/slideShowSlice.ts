import { createSlice } from "@reduxjs/toolkit";

const slideShowSlice = createSlice({
    name: 'slideShowSlice',
    initialState: {
        isShowSearch: false,
        isShowNotif: false,
    },
    reducers: {
        hideSearchSlideShow: (state) => { state.isShowSearch = false },
        hideNotificationSlideShow: (state) => { state.isShowNotif = false },
        toggleSearchSlideShow: (state) => { state.isShowSearch = !state.isShowSearch },
        toggleNotificationSlideShow: (state) => { state.isShowNotif = !state.isShowNotif },
    }
})

export const { hideSearchSlideShow, hideNotificationSlideShow, toggleSearchSlideShow, toggleNotificationSlideShow } = slideShowSlice.actions
export default slideShowSlice.reducer