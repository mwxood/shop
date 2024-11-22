import styles from './Helpers.module.css';

export function Div({ children, className = '', style }) {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
}

export function Wrapper({ children, className, style }) {
  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Card({ children }) {
  return <Div className={styles.contentHolder}>{children}</Div>;
}
