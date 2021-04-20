import { configureStore } from "@reduxjs/toolkit";
import fieldReducer from "../features/fieldSlice";
import viewOptionReducer from "../features/viewOptionSlice";
export const store = configureStore({
    reducer: {
        field : fieldReducer,
        viewOption : viewOptionReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});
