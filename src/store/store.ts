// store.ts
import { configureStore } from "@reduxjs/toolkit";
import slideShowReducer from "./slideShowSlice";
import searchInputValueReducer from "./searchInputValueSlice";
import searchBoxReducer from './searchBoxSlice'
import followRequestsReducer from "./followRequestsSlice";
import createNewPostReducer from "./createNewPostSlice";
import authReducer from "./authSlice";
import darkModeReducer from "./darkModeSlice";
import loadingReducer from "./loadingSlice";


export const store = configureStore({
    reducer: {
        slideShowReducer,
        searchInputValueReducer,
        searchBoxReducer,
        followRequestsReducer,
        createNewPostReducer,
        authReducer,
        darkModeReducer,
        loadingReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
