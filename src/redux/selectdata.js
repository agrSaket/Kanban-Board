import { createReducer } from "@reduxjs/toolkit";

// Create a Redux slice for managing selected data
export const dataSelectSlice = createReducer(
    {},
    {
        // Reducer for handling data selection request
        dataSelectRequest: (state) => {
            state.loading = true; // Set loading to true
            state.dashColumn = []; // Initialize dashColumn as an empty array
        },
        // Reducer for handling data selection success
        dataSelectSuccess: (state, action) => {
            state.loading = false; // Set loading to false
            state.dashColumn = action.payload.dashColumn; // Store selected data
            state.userstatus = action.payload.userstatus; // Store user information
            state.prioritystatus = action.payload.prioritystatus;
            state.statstatus = action.payload.statstatus;
        },
        // Reducer for handling data selection failure
        dataSelectFailure: (state, action) => {
            state.loading = false; // Set loading to false
            state.dashColumn = []; // Clear selected data
            state.message = action.payload.message; // Store an error message if available
        },
    }
);