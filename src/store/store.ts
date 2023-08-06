import { configureStore } from "@reduxjs/toolkit";
import slideShowReducer from "./slideShowSlice";

export const store = configureStore({
    reducer: slideShowReducer
})