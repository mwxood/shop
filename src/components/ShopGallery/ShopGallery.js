import { Div } from '../Helpers/Hepleprs';
import styles from './styles/ShopGallery.module.css';
import data from '../context/data';
import BigImage from './BigImage';
import SmallImages from './SmallImages';

const ShopGallery = () => {
  return (
    <Div className={''}>
      <BigImage />
      {data.map((item) => {
        return <SmallImages imagesData={item} />;
      })}
    </Div>
  );
};

export default ShopGallery;
