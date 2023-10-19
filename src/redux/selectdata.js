import { createReducer } from "@reduxjs/toolkit";

// Create a Redux slice for managing selected data
export const dataSelectSlice = createReducer(
    {},
    {
        // Reducer for handling data selection request
        dataSelectRequest: (state) => {
            state.loading = true; // Set loading to true
            state.dataSelected = []; // Initialize dataSelected as an empty array
        },
        // Reducer for handling data selection success
        dataSelectSuccess: (state, action) => {
            state.loading = false; // Set loading to false
            state.dataSelected = action.payload.dataSelected; // Store selected data
            state.user = action.payload.user; // Store user information
            state.prioritystatus = action.payload.prioritystatus;
        },
        // Reducer for handling data selection failure
        dataSelectFailure: (state, action) => {
            state.loading = false; // Set loading to false
            state.dataSelected = []; // Clear selected data
            state.message = action.payload.message; // Store an error message if available
        },
    }
);