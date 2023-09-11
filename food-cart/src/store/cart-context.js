import React, { useEffect, useReducer } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    add: () => { },
    remove: () => { },
    clear: () => { },
    updateAmount: () => { }
});

const STORAGE_KEY = "ReactMeals_Cart";
const DEFAULT_CART_STATE = {
    items: [],
    totalAmount: 0,
    totalPrice: 0
}

const getTotalAmount = (items) => items.reduce((amount, currentItem) => amount + currentItem.amount, 0);
const getTotalPrice = (items) => items.reduce((price, currentItem) => price + currentItem.price*currentItem.amount, 0);

const cartReducer = (state, action) => {
    if (action.type === "INIT") {
        return {
            items: action.items,
            totalAmount: getTotalAmount(action.items),
            totalPrice: getTotalPrice(action.items)
        }
    }
    else if (action.type === "ADD") {
        let newItems = [...state.items];
        let existingItem = newItems.filter(x => x.id === action.item.id)[0];
        if (existingItem) {
            existingItem.amount += action.item.amount;
        }
        else {
            newItems.push({
                id: action.item.id,
                name: action.item.name,
                description: action.item.description,
                price: action.item.price,
                amount: action.item.amount
            })
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
        return {
            items: newItems,
            totalAmount: getTotalAmount(newItems),
            totalPrice: getTotalPrice(newItems)
        }
    } 
    else if (action.type === "REMOVE") {
        let newItems = state.items.filter(x => x.id !== action.itemId);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
        return {
            items: newItems,
            totalAmount: getTotalAmount(newItems),
            totalPrice: getTotalPrice(newItems)
        }
    }
    else if (action.type === "CLEAR") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        return DEFAULT_CART_STATE;
    }
    else if (action.type === "UPDATE_AMOUNT") {
        let newItems = [...state.items];
        let existingItem = newItems.filter(x => x.id === action.itemId)[0];
        if (existingItem) {
            existingItem.amount = action.amount;
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
            return {
                items: newItems,
                totalAmount: getTotalAmount(newItems),
                totalPrice: getTotalPrice(newItems)
            }
        }
    }

    return DEFAULT_CART_STATE;
}

function CartContextProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_CART_STATE);

    useEffect(()=> {
        const savedCartState = localStorage.getItem(STORAGE_KEY);
        if (savedCartState) {
            dispatchCartAction({type: "INIT", items: JSON.parse(savedCartState)});
        }
    }, []);

    const addToCart = (item) => {
        dispatchCartAction({type: "ADD", item: item});
    }

    const removeFromCart = (itemId) => {
        dispatchCartAction({type: "REMOVE", itemId: itemId});
    } 

    const clearCart = () => {
        dispatchCartAction({type: "CLEAR"});
    }

    const updateAmount = (itemId, amount) => {
        dispatchCartAction({type: "UPDATE_AMOUNT", itemId: itemId, amount: amount});       
    } 

    return (
        <CartContext.Provider value={{items: cartState.items, totalAmount: cartState.totalAmount, totalPrice: cartState.totalPrice, add: addToCart, remove: removeFromCart, updateAmount: updateAmount, clear: clearCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;
export { CartContextProvider };