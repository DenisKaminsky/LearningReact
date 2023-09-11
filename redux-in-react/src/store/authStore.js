import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = {
    isLoggedIn: false,
    email: ''
};

const authSlice = createSlice({
    name: "auth",
    initialState: DEFAULT_STATE,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.email = '';
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;