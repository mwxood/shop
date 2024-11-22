import { useEffect, useState } from 'react';
import styles from './styles/Header.module.css';

const Cart = ({ update, cartCallback }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [update]);

  return (
    <span onClick={cartCallback} className={`d-block ${styles.cartHolder}`}>
      <img src="/images/cart_icn.svg" alt="cart" />
      {cart && cart.length ? (
        <span className={styles.cartCount}>{cart.length}</span>
      ) : null}
    </span>
  );
};

export default Cart;
