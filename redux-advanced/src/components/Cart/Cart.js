
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items);
  const cartIsEmpty = items == null || items.length <= 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartIsEmpty && <h2>Cart is Empty!</h2>}
      {!cartIsEmpty &&
        <ul>
          {
            items.map(item => 
              <CartItem
                key={item.id} item={{ id: item.id, title: item.title, quantity: item.amount, price: item.price }}
              />
            )
          }
        </ul>
      }
    </Card>
  );
};

export default Cart;
