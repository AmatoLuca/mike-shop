import { useMemo } from 'react';
import { StyledCartHeader } from './StyledCartHeader';
import { GetCart } from '../../../redux/selectors';
import { Product } from '../../models';

const CartHeader = () => {
  const CartState = GetCart();
  const totalPrice = CartState.totalPrice;

  const itemsQuantity = useMemo(() => {
    return CartState.cartItems.reduce(
      (acc: number, item: Product) => acc + item.qty,
      0
    );
  }, [CartState]);

  return (
    <StyledCartHeader>
      <div className="cart-header-content">
        <div className="cart-header-content__title">Bag</div>
        <div className="cart-header-content__info">
          <div className="cart-header-content__quantity">{`${itemsQuantity} Items |`}</div>
          <div className="cart-header-content__total-price">
            {itemsQuantity === 0 ? '––' : `${totalPrice} €`}
          </div>
        </div>
      </div>
    </StyledCartHeader>
  );
};

export default CartHeader;
