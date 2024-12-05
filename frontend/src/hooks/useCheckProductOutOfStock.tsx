import { useMemo } from 'react';
import { GetCart } from '../redux/selectors';
import { ProductSize } from '../components/Product/models';
import { Product } from '../components/models';

const useCheckProductOutOfStock = (
  productId: string,
  sizeSelected: number | undefined
) => {
  const CartState = GetCart();

  // Check if a product is out of stock and prevento
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

  return isProductOutOfStock;
};

export default useCheckProductOutOfStock;
