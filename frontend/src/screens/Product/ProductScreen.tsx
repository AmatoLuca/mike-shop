import { useState, useCallback, useMemo } from 'react';
import useShowMessage from '../../hooks/useShowMessage';
import { StyledProductScreen } from './StyledProductScreen';
import { useParams } from 'react-router-dom';
import ProductSlider from '../../components/Product/ProductSlider/ProductSlider';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import ProductSizes from '../../components/Product/ProductSizes/ProductSizes';
import { useGetProductDetailsQuery } from '../../redux/slices/productsApiSlice';
import { ProductIdParams } from '../models';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { MessageVariant } from '../../components/Message/models';
import NotInStockMessage from '../../components/NotInStockMessage/NotInStockMessage';
import { GetProductDetailsResponse } from '../../redux/hooks';
import Favorite from '../../components/Button/Favorite';
import { GetCart } from '../../redux/selectors';
import { Product } from '../../components/models';
import { ProductSize } from '../../components/Product/models';

const ProductScreen = () => {
  const [sizeSelected, setSizeSelected] = useState<number>();
  const CartState = GetCart();

  const { id: productId } = useParams<ProductIdParams>();

  const {
    data: product,
    isLoading,
    error,
  }: GetProductDetailsResponse = useGetProductDetailsQuery(productId as string);

  const countInStock = product?.countInStock;

  const { isShowMessage } = useShowMessage(error);

  // Check if a product is out of stock and prevent
  // to choose a product that can be not available
  const isProductOutOfStock = useMemo(() => {
    let isOutOfStock = false;

    const targetProduct = CartState.cartItems.find((item: Product) => {
      return item._id === productId && item.sizeChosen === sizeSelected;
    });

    const productInStock = targetProduct?.sizes.find((target: ProductSize) => {
      return target.size === sizeSelected;
    });

    const quantityCurrentlyIntoCart = targetProduct?.qty;

    if (productInStock && quantityCurrentlyIntoCart) {
      quantityCurrentlyIntoCart >= productInStock.countInStock
        ? (isOutOfStock = true)
        : (isOutOfStock = false);
    }

    return isOutOfStock;
  }, [CartState, productId, sizeSelected]);

  const { isShowMessage: isOutOfStockWarning } =
    useShowMessage(isProductOutOfStock);

  const sizeSelectHandler = useCallback(
    (size: number) => {
      setSizeSelected(size);
    },
    [sizeSelected]
  );

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

          {isOutOfStockWarning && (
            <Message
              variant={MessageVariant.error}
              content={
                "There's no more availability in stock for this Product. Sorry!"
              }
            />
          )}
          <div className="product-main">
            <div className="product-content">
              <ProductSizes
                sizes={product?.sizes || []}
                selectSize={sizeSelectHandler}
              />

              <div className="product-btn-wrapper">
                <Button
                  $inputColor={'black'}
                  countInStock={countInStock}
                  product={product}
                  size={sizeSelected}
                  isOutOfStock={isProductOutOfStock}
                >
                  {'Add to Bag'}
                </Button>
                <Favorite />
              </div>
            </div>
            <div className="product-info">
              <div className="product-description">{product?.description}</div>
              <Rating
                value={product?.rating ?? 0}
                text={`Reviews (${product?.numReviews})`}
                product={product}
              />
            </div>
          </div>
        </StyledProductScreen>
      )}
    </>
  );
};

export default ProductScreen;
