import React, {useContext} from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import styles from './MealItem.module.css';

function MealItem(props) {
    const price = props.price.toFixed(2);
    const cartContext = useContext(CartContext);

    const handleSubmit = (amount) => {
        cartContext.add({
            id: props.id,
            name: props.name,
            description: props.description,
            price: +price,
            amount: +amount
        });
    }

    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <MealItemForm id={props.id} onSubmit={handleSubmit}/>
        </div>
    );
}

export default MealItem;