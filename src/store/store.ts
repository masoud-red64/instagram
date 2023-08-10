// store.ts
import { configureStore } from "@reduxjs/toolkit";
import slideShowReducer from "./slideShowSlice";
import searchInputValueReducer from "./searchInputValueSlice";
import searchBoxReducer from './searchBoxSlice'
import followRequestsReducer from "./followRequestsSlice";
import createNewPostReducer from "./createNewPostSlice";


export const store = configureStore({
    reducer: {
        slideShowReducer,
        searchInputValueReducer,
        searchBoxReducer,
        followRequestsReducer,
        createNewPostReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
