import { useEffect } from 'react';
import { sendCartData, initializeCart } from './store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    dispatch(initializeCart())
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
