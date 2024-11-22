import { Div } from '../Helpers/Hepleprs';
import styles from './ShopGallery.module.css';

const BigImage = ({ image, className }) => {
  return (
    <Div className={`${className} ${styles.bigImageHolder}`}>
      <img src={image} alt="social" />
    </Div>
  );
};

export default BigImage;
