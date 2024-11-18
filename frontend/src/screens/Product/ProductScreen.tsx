import { StyledProductScreen } from './StyledProductScreen';
import { useParams } from 'react-router-dom';
import products from '../../products';
import ProductSlider from '../../components/Product/ProductSlider/ProductSlider';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import { PiHeartStraightLight } from 'react-icons/pi';
import ProductSizes from '../../components/Product/ProductSizes/ProductSizes';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((product) => product._id === productId);

  return (
    <StyledProductScreen>
      <div className="product-header">
        <div className="product-name">{product?.name}</div>
        <div className="product-category">{product?.category}</div>
        <div className="product-price">{product?.price} &euro;</div>
      </div>

      <ProductSlider product={product} />

      <div className="product-main">
        <div className="product-content">
          <ProductSizes sizes={product?.sizes || []} />

          <div className="product-btn-wrapper">
            <Button $inputColor={'black'}>{'Add to Bag'}</Button>
            <Button $inputColor={'white'}>
              {'Favorite'} <PiHeartStraightLight />
            </Button>
          </div>
        </div>
        <div className="product-info">
          <div className="product-description">{product?.description}</div>
          <Rating
            value={product?.rating ?? 0}
            text={`Reviews (${product?.numReviews})`}
          />
        </div>
      </div>
    </StyledProductScreen>
  );
};

export default ProductScreen;
