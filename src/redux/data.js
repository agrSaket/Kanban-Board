import { createReducer } from "@reduxjs/toolkit";

// Create a Redux slice for managing data
export const dataSlice = createReducer(
    {}, // Initial state is an empty object
    {
        // Reducer for handling data request
        dataRequest: (state) => {
            state.loading = true;   // Set loading to true
        },
        // Reducer for handling data success
        dataSuccess: (state, action) => {
            state.loading = false; // Set loading to false
            state.tickets = action.payload.tickets; // Store ticket data
            state.users = action.payload.users; // Store user data
        },
        // Reducer for handling data failure
        dataFailure: (state) => {
            state.loading = false; // Set loading to false
            state.tickets = []; // Clear ticket data
            state.users = []; // Clear user data
        },
    }
);