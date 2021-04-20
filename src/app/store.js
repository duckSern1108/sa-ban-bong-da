import { configureStore } from "@reduxjs/toolkit";
import fieldReducer from "../features/field/fieldSlice";
import viewOptionReducer from "../features/viewOption/viewOptionSlice";
export const store = configureStore({
    reducer: {
        field : fieldReducer,
        viewOption : viewOptionReducer
    },
    devTools: process.env.NODE_ENV !== "production",
});
