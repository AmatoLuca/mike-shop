import { StyledProductScreen } from './StyledProductScreen';
import { useParams } from 'react-router-dom';
import ProductSlider from '../../components/Product/ProductSlider/ProductSlider';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import { PiHeartStraightLight } from 'react-icons/pi';
import ProductSizes from '../../components/Product/ProductSizes/ProductSizes';
import { useGetProductDetailsQuery } from '../../redux/slices/productsApiSlice';
import { ProductIdParams } from '../models';
import Loader from '../../components/Loader/Loader';

const ProductScreen = () => {
  const { id: productId } = useParams<ProductIdParams>();

  const {
    data: product,
    isLoading,
    error,
  }: any = productId
    ? useGetProductDetailsQuery(productId)
    : { data: null, isLoading: false, error: null };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error?.data?.message || error?.error}</div>;
  }

  return (
    <>
      {product && (
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
      )}
    </>
  );
};

export default ProductScreen;
