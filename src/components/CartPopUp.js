import { useEffect, useState } from 'react';
import { Div } from './Helpers/Hepleprs';
import styles from './styles/CartPopUp.module.css';
import Price from './Price';

const CartPopUp = ({
  activePopUp = false,
  closeCart,
  clearProdCallback,
  updateCart,
}) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [updateCart]);

  if (!activePopUp) {
    return null;
  }

  const clearProdHolder = (id) => {
    cart.filter((item) => {
      if (item.id === id) {
        localStorage.removeItem('cart');
        setCart([]);
      }
    });
    clearProdCallback();
  };

  return (
    <Div className={styles.popUpHolder}>
      <Div className={styles.popUp}>
        <button className={styles.closeBtn} onClick={closeCart}>
          <img width="26" src="../close.svg" alt="close button" />
        </button>
        <Div className={`${styles.popUpHeader}`}>
          <ul
            className={`d-flex justify-content-between removeListStyle ${styles.tabsNav}`}
          >
            <li className={styles.active}>
              <button>Cart</button>
            </li>
            <li>
              <button>Checkout</button>
            </li>
            <li>
              <button>Shipping</button>
            </li>
            <li>
              <button>Done</button>
            </li>
          </ul>
        </Div>
        <Div className={styles.popUpBody}>
          {cart && cart.length ? (
            cart.map((item) => (
              <Div
                key={item.id}
                className={`d-flex align-items-center w-100 ${styles.cartItem}`}
              >
                <Div className={styles.cartImage}>
                  <img
                    width="114"
                    src={item.images[0].smallImage}
                    alt={item.title}
                  />
                </Div>
                <Div
                  className={`d-flex align-items-center justify-content-between w-100 ${styles.cartInfo}`}
                >
                  <Div className={styles.itemTitleHolder}>
                    <h4>{item.name}</h4>
                    <span
                      className={`${styles.sizeHolder} d-flex flex-wrap align-items-center`}
                    >
                      <span>
                        Size:
                        <span className={styles.sizeText}>{item.size}</span>
                      </span>
                    </span>
                    <span
                      className={`${styles.colorHolder} d-flex flex-wrap align-items-center`}
                    >
                      Color:
                      {item.colors.map((color) => {
                        return (
                          <span
                            key={color.colorName}
                            style={{
                              backgroundColor: color.colorValue,
                              width: '16px',
                              height: '16px',
                              display: 'inline-block',
                              marginLeft: '5px',
                            }}
                          ></span>
                        );
                      })}
                    </span>
                  </Div>
                  <Div className={styles.quantityHolder}>
                    <Div className={styles.quantity}>
                      <button>-</button>
                      <span>{item.quantity}</span>
                      <button>+</button>
                    </Div>
                  </Div>
                  <Price price={item.price} currency="USD" />
                  <button
                    onClick={() => clearProdHolder(item.id)}
                    className={styles.clearBtn}
                  >
                    <img src="../cancel.svg" alt="close button" />
                  </button>
                </Div>
              </Div>
            ))
          ) : (
            <Div className={styles.emptyCart}>
              <h3>Your cart is empty</h3>
            </Div>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default CartPopUp;
