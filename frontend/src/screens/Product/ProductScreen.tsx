import useShowMessage from '../../hooks/useShowMessage';
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
import Message from '../../components/Message/Message';
import { MessageVariant } from '../../components/Message/models';
import NotInStockMessage from '../../components/NotInStockMessage/NotInStockMessage';
import { GetProductDetailsResponse } from '../../redux/slices/productsApiSlice';

const ProductScreen = () => {
  const { id: productId } = useParams<ProductIdParams>();

  /* const {
    data: product,
    isLoading,
    error,
  }: any = productId
    ? useGetProductDetailsQuery(productId)
    : { data: null, isLoading: false, error: null }; */

  console.log('@@@product id:', productId);
  console.log('@@@product id type:', typeof productId);

  const {
    data: product,
    isLoading,
    error,
  }: GetProductDetailsResponse = useGetProductDetailsQuery(productId as string);

  const countInStock = product?.countInStock;

  const { isShowMessage } = useShowMessage(error);

  return (
    <>
      {isLoading && <Loader />}
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={error?.data?.message || error?.error}
        />
      )}
      {product && (
        <StyledProductScreen>
          <div className="product-header">
            {!countInStock && <NotInStockMessage />}
            <div className="product-name">{product?.name}</div>
            <div className="product-category">{product?.category}</div>
            <div className="product-price">{product?.price} &euro;</div>
          </div>

          <ProductSlider product={product} />

          <div className="product-main">
            <div className="product-content">
              <ProductSizes sizes={product?.sizes || []} />

              <div className="product-btn-wrapper">
                <Button
                  $inputColor={'black'}
                  countInStock={countInStock}
                  product={product}
                >
                  {'Add to Bag'}
                </Button>
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
