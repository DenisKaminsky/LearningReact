const redux = require('redux');

const DEFAULT_STATE = {
    counter: 0
}

const counterReducer = (state = DEFAULT_STATE, action) => {
    console.log("REDUCER");

    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    }
    else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        };
    }

    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    console.log("SUBSCRIBER");
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });