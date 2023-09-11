import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_STATE = {
    items: [],
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: DEFAULT_STATE,
    reducers: {
        initialize(state, action) {
            if (action.payload && action.payload.length > 0) {
                state.items = action.payload;
                state.totalAmount = action.payload.reduce((total, item) => total + item.amount, 0);
            }
        },
        addToCart(state, action) {
            let existingItem = state.items.filter(item => item.id === action.payload.id)[0];
            if (existingItem) {
                existingItem.amount += action.payload.amount
            }
            else {
                state.items.push(action.payload);
            }
            state.totalAmount+=action.payload.amount;
        },  
        removeFromCart(state, action) {
            let itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                let item = state.items[itemIndex];

                state.items = state.items.filter(x => x.id !== action.payload);
                state.totalAmount-=item.amount;
            }
        },
        clearCart(state) {
            state = DEFAULT_STATE;
        },
        increaseAmount(state, action) {
            let existingItem = state.items.filter(item => item.id === action.payload)[0];
            if (existingItem){
                existingItem.amount+=1;
                state.totalAmount+=1;
            }
        },
        decreaseAmount(state, action) {
            let existingItemIndex = state.items.findIndex(item => item.id === action.payload);
            if (existingItemIndex >= 0) {
                let item = state.items[existingItemIndex];
                item.amount-=1;
                state.totalAmount-=1;
                if (item.amount <= 0) {
                    state.items = state.items.filter(x => x.id !== action.payload);
                }
            }
        }
    }
});

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        const response = await fetch(
            "https://reactmeals-5c3fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
            {
                method: 'PUT',
                body: JSON.stringify(cartData)
            }
        );

        if (!response.ok) {
            throw new Error("Cannot send Cart data!");
        }
    }
}

export const initializeCart = () => {
    return async (dispatch) => {
        const response = await fetch(
            "https://reactmeals-5c3fe-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
            {
                method: 'GET'
            }
        );

        if (!response.ok) {
            throw new Error("Cannot fetch Cart data!");
        }

        const data = await response.json();
        let loadedItems = [];
        for (const itemKey in data){
            loadedItems.push({
                id: data[itemKey].id,
                title: data[itemKey].title,
                price: data[itemKey].price,
                amount: data[itemKey].amount,
            });
        }

        dispatch(cartSlice.actions.initialize(loadedItems));
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice;