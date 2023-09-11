import { useState, useEffect } from "react";

let globalState = {};

let listeners = [];

let actions = {};

function useStore() {
    const [, setState] = useState(globalState);

    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState);

        return () => listeners.filter(x => x !== setState);
    }, []);

    return [globalState, dispatch];
}

function initStore(userActions, initialState) {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }

    if (userActions) {
        actions = { ...actions, ...userActions };
    }
}

export default useStore;
export { initStore };