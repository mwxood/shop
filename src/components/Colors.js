import { useState } from 'react';
import styles from './styles/Colors.module.css';
import { Div } from './Helpers/Hepleprs';

const Colors = ({ colors = [] }) => {
  const [activeColor, setActiveColor] = useState(0);

  const filterColorHandler = (index) => {
    setActiveColor(index);
  };
  return (
    <div className="colors">
      <span className={`${styles.colorTitle} d-block`}>Color</span>
      <Div className="d-flex">
        {colors.length &&
          colors.map((color, index) => (
            <button
              key={index}
              onClick={() => filterColorHandler(index)}
              className={`${styles.colorBtn} ${
                activeColor === index ? styles.active : ''
              }`}
            >
              <span
                style={{
                  backgroundColor: color.colorValue,
                  borderColor: color.colorValue,
                }}
              ></span>
            </button>
          ))}
      </Div>
    </div>
  );
};

export default Colors;
