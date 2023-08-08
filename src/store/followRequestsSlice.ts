import { createSlice } from "@reduxjs/toolkit";

const followRequestsSlice = createSlice({
    name: 'followRequests',
    initialState: {
        isShowFollowRequestsInSlide: false,
        isShowFollowRequestsInPage: false
    },
    reducers: {
        showFollowRequestsInSlide: (state) => { state.isShowFollowRequestsInSlide = true },
        showFollowRequestsInPage: (state) => { state.isShowFollowRequestsInPage = true },
        hideFollowRequestsInSlide: (state) => { state.isShowFollowRequestsInSlide = false },
        hideFollowRequestsInPage: (state) => { state.isShowFollowRequestsInPage = false },
    }
})

export const { showFollowRequestsInSlide, showFollowRequestsInPage, hideFollowRequestsInSlide, hideFollowRequestsInPage } = followRequestsSlice.actions
export default followRequestsSlice.reducer