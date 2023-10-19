import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./data";
import { dataSelectSlice } from "./selectdata";

// Create the Redux store and combine the reducers
export const store = configureStore({
    reducer: {
        dataSlice,         // Reducer for managing data
        dataSelectSlice,   // Reducer for managing selected data
    },
});