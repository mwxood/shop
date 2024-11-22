import styles from './styles/Button.module.css';

const Button = ({ children, buttonActive, onClickCallback }) => {
  return (
    <button
      onClick={onClickCallback}
      className={`${
        buttonActive ? styles.buttonActive : styles.buttonDefault
      } ${styles.button}`}
    >
      {children}
    </button>
  );
};

export default Button;
