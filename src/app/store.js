import { configureStore } from "@reduxjs/toolkit";
import fieldReducer from "../features/field/fieldSlice";

export const store = configureStore({
    reducer: {
        field : fieldReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});
