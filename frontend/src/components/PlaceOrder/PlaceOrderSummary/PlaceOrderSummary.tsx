import { StyledPlaceOrderSummary } from './StyledPlaceOrderSummary';
import { GetCart } from '../../../redux/selectors';
import { PlaceOrderSummaryProps } from '../models';
import Loader from '../../Loader/Loader';

const PlaceOrderSummary = ({
  isLoading,
  onPlaceOrder,
}: PlaceOrderSummaryProps) => {
  const CartState = GetCart();

  return (
    <StyledPlaceOrderSummary>
      <div className="order-summary-inner">
        <div className="order-summary-row">
          <div className="order-summary-key">Items</div>
          <div className="order-summary-value">{CartState.itemsPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Shipping</div>
          <div className="order-summary-value">{CartState.shippingPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Tax</div>
          <div className="order-summary-value">{CartState.taxPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Total</div>
          <div className="order-summary-value">{CartState.totalPrice} €</div>
        </div>

        {isLoading ? (
          <div className="order-summary-row-btn">
            <Loader />
          </div>
        ) : (
          <div className="order-summary-row-btn">
            {CartState.cartItems.length === 0 ? (
              <button className="btn-disabled">Place Order</button>
            ) : (
              <button
                className="btn-active"
                type="submit"
                onClick={onPlaceOrder}
              >
                Place Order
              </button>
            )}
          </div>
        )}
      </div>
    </StyledPlaceOrderSummary>
  );
};

export default PlaceOrderSummary;
