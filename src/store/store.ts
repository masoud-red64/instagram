// store.ts
import { configureStore } from "@reduxjs/toolkit";
import slideShowReducer from "./slideShowSlice";
import searchInputValueReducer from "./searchInputValueSlice";
import searchBoxReducer from './searchBoxSlice'
import followRequestsReducer from "./followRequestsSlice";
import overlayReducer from "./OverlaySlice";


export const store = configureStore({
    reducer: {
        slideShowReducer,
        searchInputValueReducer,
        searchBoxReducer,
        followRequestsReducer,
        overlayReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
