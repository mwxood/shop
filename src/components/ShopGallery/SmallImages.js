import { useState } from 'react';
import styles from './ShopGallery.module.css';

const SmallImages = ({ imagesData = [], className, onImageClick }) => {
  const [active, setActive] = useState(null);

  const handleImageClick = (image, index) => {
    if (onImageClick) {
      onImageClick(image);
      setActive(index);
    }
  };

  return (
    <ul className={`${styles.smallGallery} d-flex removeListStyle`}>
      {imagesData.length > 0 &&
        imagesData.map((image, index) => (
          <li
            onClick={() => handleImageClick(image.smallImage, index)}
            className={`${className} ${active === index ? styles.active : ''}`}
            key={index}
          >
            <img src={image.smallImage} alt="social" />
          </li>
        ))}
    </ul>
  );
};

export default SmallImages;
