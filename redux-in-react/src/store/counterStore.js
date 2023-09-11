import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_STATE = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter", //name is required
    initialState: DEFAULT_STATE,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        add(state, action) {
            state.counter+=action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;