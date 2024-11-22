import { Div } from './Helpers/Hepleprs';
import styles from './styles/Price.module.css';

const Price = ({ price, currency }) => {
  let currencySymbol = '';

  switch (currency) {
    case 'USD':
      currencySymbol = `$`;
      break;
    case 'EUR':
      currencySymbol = `€`;
      break;
    default:
      currencySymbol = `$`;
  }
  return (
    <Div className={styles.price}>
      <span className={styles.priceSymbol}>{currencySymbol}</span>
      {price}
    </Div>
  );
};

export default Price;
