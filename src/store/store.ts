// store.ts
import { configureStore } from "@reduxjs/toolkit";
import slideShowReducer from "./slideShowSlice";
import searchInputValueReducer from "./searchInputValueSlice";

export const store = configureStore({
    reducer: {
         slideShowReducer,
         searchInputValueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
