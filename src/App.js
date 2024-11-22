import { useEffect, useState } from 'react';
import './App.css';
import CartPopUp from './components/CartPopUp';
import Header from './components/Header/Header';
import ShopPage from './pages/ShopPage';

const App = () => {
  const [activePopUp, setActivePopUp] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [cart, setCart] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shopNowHandler = () => {
    setActivePopUp(true);
  };

  const closeCart = () => {
    setActivePopUp(false);
  };

  const addToCartCallBack = () => {
    setCartActive(true);
    setUpdateCart(true);
  };

  const clearProdHandler = () => {
    setCartActive(false);
    setUpdateCart(false);
  };

  const openCartHandler = () => {
    setActivePopUp(true);
  };

  return (
    <div className="App">
      <Header update={cartActive} cartCallback={openCartHandler} />
      <ShopPage
        shopNowHandler={shopNowHandler}
        addToCartCallBack={addToCartCallBack}
      />
      <CartPopUp
        clearProdCallback={clearProdHandler}
        updateCart={updateCart}
        activePopUp={activePopUp}
        closeCart={closeCart}
      />
    </div>
  );
};

export default App;
