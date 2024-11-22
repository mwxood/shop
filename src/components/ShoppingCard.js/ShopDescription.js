import { useState } from 'react';
import { Div } from '../Helpers/Hepleprs';
import styles from './ShopingCard.module.css';

const ShopDescription = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(data.isFavorite);

  const stars = (starsCount) => {
    const starElements = [];

    for (let i = 0; i < starsCount; i++) {
      starElements.push(
        <span key={i}>
          <img src="../star.svg" alt="rating" />
        </span>
      );
    }

    // Добавяне на допълнителна звезда
    starElements.push(
      <span key={starsCount + 1}>
        <img src="../star_active.svg" alt="rating" />
      </span>
    );

    return starElements;
  };

  const favoriteHandler = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Div className="w-100">
      <Div className={`${styles.popularHolder} d-flex justify-content-between`}>
        <span className={styles.pupular}>
          {data.isPopular ? 'Popular' : 'NotPopular'}
        </span>
        <span
          onClick={favoriteHandler}
          className={`${styles.heartBg} d-flex justify-content-center align-items-center`}
        >
          {isFavorite ? (
            <img width="24" src="../heart-active.svg" alt="favorite" />
          ) : (
            <img width="24" src="../heart.svg" alt="favorite" />
          )}
        </span>
      </Div>
      <Div>
        <h1 className={styles.title}>{data.name}</h1>
        <span className={`${styles.reviewHolder} d-flex align-items-center`}>
          <span className={styles.ratingHolder}>
            {stars(data.reviewsScore)}
          </span>
          <span className={styles.ratingDescription}>
            {data.reviewsCount > 1
              ? `${data.reviewsCount} reviews`
              : '1 review'}
          </span>
        </span>
      </Div>
    </Div>
  );
};

export default ShopDescription;
