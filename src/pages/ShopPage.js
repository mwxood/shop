import { useEffect, useState } from 'react';
import { Card, Div, Wrapper } from '../components/Helpers/Hepleprs';
import BigImage from '../components/ShopGallery/BigImage';
import SmallImages from '../components/ShopGallery/SmallImages';
import data from '../context/GlobalState';
import Tabs from '../components/Tabs';
import ShopDescription from '../components/ShoppingCard.js/ShopDescription';
import Size from '../components/Size';
import Colors from '../components/Colors';
import Price from '../components/Price';
import Button from '../components/Button';
import styles from '../components/styles/Prod.module.css';

const ShopPage = ({ shopNowHandler, addToCartCallBack }) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [getCurrentData, setCurrentData] = useState({});
  let cart = [];
  cart = [...cart, getCurrentData];

  useEffect(() => {
    const index = data.findIndex((item) => item.id === 1);
    setCurrentData({ ...data[index] });
  }, []);

  const onChangeImage = (image) => {
    setSelectedImage(image);
  };

  const addToCartHandler = () => {
    addToCartCallBack();
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  let navItems = getCurrentData.tabMenus ? [...getCurrentData.tabMenus] : [];
  const tabContents = [
    <div key="tab1">{getCurrentData.text}</div>,
    <div key="tab2">Content for Tab 2</div>,
    <div key="tab3">Content for Tab 3</div>,
  ];

  const onChangeProduct = (size) => {
    const changedProd = data.filter((item) => item.filterSize === size);
    setCurrentData({ ...changedProd[0] });
  };

  return (
    <Wrapper>
      <Card>
        <Div className={`d-flex ${styles.cardWrapper}`}>
          <Div className={`${styles.prodHolder} d-flex`}>
            <Div key={getCurrentData.id}>
              <BigImage
                image={
                  selectedImage ||
                  (getCurrentData.images && getCurrentData.images[0].smallImage)
                }
              />
              <SmallImages
                onImageClick={onChangeImage}
                imagesData={getCurrentData.images}
              />
            </Div>
          </Div>

          <Div className="w-100">
            <Div className={`d-flex w-100`}>
              <ShopDescription data={getCurrentData} />
            </Div>

            <Div className="mb-32 ">
              <Tabs navItems={navItems}>{tabContents}</Tabs>
            </Div>

            <Div className={`d-flex flex-wrap`}>
              <Size
                onProductCallback={onChangeProduct}
                sizes={getCurrentData.availableSizes}
                data={data}
              />
              <Colors colors={getCurrentData.colors} />
            </Div>

            <Div
              className={`${styles.buttonsHolder} d-flex flex-wrap align-items-center justify-content-between w-100 mt-42`}
            >
              <Price
                price={getCurrentData.price}
                currency={getCurrentData.currency}
              />
              <Button onClickCallback={shopNowHandler} buttonActive>
                Shop Now
              </Button>
              <Button onClickCallback={addToCartHandler}>Add to cart</Button>
            </Div>
          </Div>
        </Div>
      </Card>
    </Wrapper>
  );
};

export default ShopPage;
