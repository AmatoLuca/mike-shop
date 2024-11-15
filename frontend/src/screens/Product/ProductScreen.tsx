import { StyledProductScreen } from './StyledProductScreen';
import { useParams } from 'react-router-dom';
import products from '../../products';
import SliderMobile from '../../components/Product/SliderMobile';
import useWindowWidth from '../../hooks/useWindowWidth';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import { PiHeartStraightLight } from 'react-icons/pi';
import ProductSizes from '../../components/Product/ProductSizes/ProductSizes';

const ProductScreen = () => {
  const windowWidth = useWindowWidth();
  //const isMobile = windowWidth <= 768;
  const isMobile = windowWidth <= 900;
  const { id: productId } = useParams();

  const product = products.find((product) => product._id === productId);
  //console.log('@@@', product);

  return (
    <StyledProductScreen>
      <div className="product-header">
        <div className="product-name">{product?.name}</div>
        <div className="product-category">{product?.category}</div>
        <div className="product-price">{product?.price} &euro;</div>
      </div>

      {isMobile && <SliderMobile product={product} />}

      <ProductSizes sizes={product?.sizes || []} />

      <div className="product-btn-wrapper">
        <Button $inputColor={'black'}>{'Add to Bag'}</Button>
        <Button $inputColor={'white'}>
          {'Favorite'} <PiHeartStraightLight />
        </Button>
      </div>

      <div className="product-description">{product?.description}</div>

      <Rating
        value={product?.rating ?? 0}
        text={`Reviews (${product?.numReviews})`}
      />
    </StyledProductScreen>
  );
};

export default ProductScreen;
