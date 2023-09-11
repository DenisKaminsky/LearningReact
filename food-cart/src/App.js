import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const openCart = () => {
    setCartIsVisible(true);
  }

  const closeCart = () => {
    setCartIsVisible(false);
  }

  return (
    <CartContextProvider> 
      {cartIsVisible && <Cart onClose={closeCart}/>}
      <Header onShowCart={openCart}/>
      <Meals />
    </CartContextProvider>
  );
}

export default App;
