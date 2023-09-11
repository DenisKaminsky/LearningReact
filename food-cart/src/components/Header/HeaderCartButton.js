import { useContext, useState, useEffect } from 'react';
import CartContext from '../../store/cart-context';

import styles from './HeaderCartButton.module.css';
import cartIcon from '../../assets/cart-icon.png';

function HeaderCartButton(props) {
    const cartContext = useContext(CartContext);
    const [isHighlighted, setIsHighlighted] = useState(false);    

    const btnClasses = `${styles.button} ${isHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (cartContext.totalAmount === 0) {
            return;
        }        
        setIsHighlighted(true);

        const timerId = setTimeout(() => 
            setIsHighlighted(false), 
        300);

        return () => {
            clearTimeout(timerId);
        }
    }, [cartContext.totalAmount]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <img className={styles.icon} src={cartIcon} alt="cart-icon"/>
            <span>Your Cart</span>
            <div className={styles.badge}>
                {cartContext.totalAmount} item(s) / ${cartContext.totalPrice.toFixed(2)}
            </div>
        </button>
    );
}

export default HeaderCartButton;