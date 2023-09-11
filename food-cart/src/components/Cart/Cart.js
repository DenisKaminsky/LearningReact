import React, { useContext, useState } from 'react';
import useHttpRequest from "../../hooks/useHttpRequest";

import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import CheckoutForm from './CheckoutForm';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart(props) {
    const [isOrderingInProgress, setIsOrderingInProgress] = useState(false);
    const [, , sendRequest] = useHttpRequest();
    const cartContext = useContext(CartContext);

    const cartItems = cartContext.items;
    const isCartEmpty = !(cartItems && cartItems.length > 0);

    const handleCloseButtonClick = () => {
        if (props.onClose) {
            props.onClose();
        }
    }

    const handleClearButtonClick = () => {
        cartContext.clear();
    }

    const handleItemIncreaseAmount = (item) => {
        cartContext.updateAmount(item.id, ++item.amount);
    }

    const handleItemDecreaseAmount = (item) => {
        let newAmount = --item.amount;
        if (newAmount <= 0) {
            cartContext.remove(item.id);
        }
        else {
            cartContext.updateAmount(item.id, newAmount);
        }
    }

    const handleOrderButtonClick = () => {
        setIsOrderingInProgress(true);
    }

    const handleOnOrderComplete = (firstName, lastName, postCode, city) => {
        sendRequest(
            {
                url: 'https://reactmeals-5c3fe-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    postCode: postCode,
                    city: city,
                    items: cartItems
                }
            },
            () => {
                console.log("ORDER COMPLETED");              
                setIsOrderingInProgress(false);
                cartContext.clear();
            }
        );
    }

    const handleOnOrderCancel = () => {
        setIsOrderingInProgress(false);
    }

    const itemsContent = <ul className={styles['cart-items']}>
        {cartItems.map(item =>
            <li key={item.id}>
                <CartItem
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={() => handleItemIncreaseAmount(item)}
                    onRemove={() => handleItemDecreaseAmount(item)}
                />
            </li>
        )}
    </ul>

    return (
        <Modal>
            {!isCartEmpty && itemsContent}
            {isCartEmpty && <h2>Cart is empty!</h2>}

            {!isCartEmpty && (
                <div className={styles.total}>
                    <span>Total</span>
                    <span>${cartContext.totalPrice.toFixed(2)}</span>
                </div>
            )}
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={handleCloseButtonClick}>Close</button>
                {!isCartEmpty && (
                    <React.Fragment>
                        <button className={styles['button--alt']} onClick={handleClearButtonClick}>Clear</button>
                        <button className={styles.button} onClick={handleOrderButtonClick}>Order</button>
                    </React.Fragment>
                )}
            </div>
            {isOrderingInProgress && <CheckoutForm onCancel={handleOnOrderCancel} onConfirm={handleOnOrderComplete} />}
        </Modal>
    );
}

export default Cart;