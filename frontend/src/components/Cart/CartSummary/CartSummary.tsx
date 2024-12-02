import { GetCart } from '../../../redux/selectors';
import { StyledCartSummary } from './StyledCartSummary';

const CartSummary = () => {
  const CartState = GetCart();
  const FREE = '0.00';

  return (
    <StyledCartSummary>
      <div className="cart-summary">
        <div className="cart-summary-title">Summary</div>
        <div className="cart-summary-subtotal">
          <div className="cart-summary-subtotal-key">Subtotal</div>
          <div className="cart-summary-subtotal-value">{`${CartState.itemsPrice} €`}</div>
        </div>
        <div className="cart-summary-shipping">
          <div className="cart-summary-shipping-key">
            Estimated Shipping & Handling
          </div>
          <div className="cart-summary-shipping-value">
            {CartState.shippingPrice === FREE
              ? 'Free'
              : `${CartState.shippingPrice} €`}
          </div>
        </div>
        <div className="cart-summary-tax">
          <div className="cart-summary-tax-key">Estimated Tax</div>
          <div className="cart-summary-tax-value">{`${CartState.taxPrice} €`}</div>
        </div>
        <div className="cart-summary-total">
          <div className="cart-summary-total-key">Total</div>
          <div className="cart-summary-total-value">{`${CartState.totalPrice} €`}</div>
        </div>
      </div>
    </StyledCartSummary>
  );
};

export default CartSummary;
