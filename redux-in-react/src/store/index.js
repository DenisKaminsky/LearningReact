import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterStore";
import authSlice from "./authStore";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;