import { StyledCartHeader } from './StyledCartHeader';
import { GetCart } from '../../../redux/selectors';

const CartHeader = () => {
  const CartState = GetCart();
  const itemsQuantity = CartState.cartItems.length;
  const totalPrice = CartState.totalPrice;

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
