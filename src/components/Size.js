import { useState } from 'react';
import { Div } from './Helpers/Hepleprs';
import styles from './styles/Size.module.css';

const Size = ({ sizes = [], data, onProductCallback }) => {
  const [activeSize, setActiveSize] = useState(0);

  const filterSizeHandler = (index, size) => {
    setActiveSize(index);
    onProductCallback(size);
  };

  return (
    <Div className={`d-flex flex-wrap w-40  ${styles.sizeHolder}`}>
      <Div
        className={`d-flex w-100 justify-content-between  ${styles.sizeTitleHolder}`}
      >
        <span className={`${styles.sizeTitle} d-block`}>Size</span>
        <a href="http://localhost:3000/">Size Guide</a>
      </Div>
      <Div className={`d-flex justify-content-between w-100`}>
        {sizes.length &&
          sizes.map((size, index) => (
            <button
              onClick={() => filterSizeHandler(index, size)}
              key={index}
              className={`${activeSize === index ? styles.active : ''} ${
                styles.sizeButton
              } `}
            >
              {size}
            </button>
          ))}
      </Div>
    </Div>
  );
};

export default Size;
