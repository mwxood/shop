import { useLocation } from 'react-router-dom';
import styles from '../styles/Navigation.module.css';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isActive, setActive] = useState(false);

  const mobileNavHanlder = () => {
    setActive(!isActive);
  };

  return (
    <nav className={`${styles.navigation} ${isActive ? styles.activeNav : ''}`}>
      <span onClick={mobileNavHanlder} className={styles.namburgerMenu}></span>
      <ul className={`removeListStyle ${styles.navigationList}`}>
        <li
          className={`${styles.navigationItem} ${
            location.pathname === '/' ? styles.active : ''
          }`}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={`${styles.navigationItem} ${
            location.pathname === '/shop' ? styles.active : ''
          }`}
        >
          <a href="/shop">Shop</a>
        </li>
        <li
          className={`${styles.navigationItem} ${
            location.pathname === '/blog' ? styles.active : ''
          }`}
        >
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
