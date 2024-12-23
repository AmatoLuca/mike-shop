import { StyledPlaceOrderSummary } from './StyledPlaceOrderSummary';
import { PlaceOrderSummaryProps } from '../models';
import Loader from '../../Loader/Loader';

const PlaceOrderSummary = ({
  isLoading,
  onPlaceOrder,
  data,
  btnText,
  itemListLength,
}: PlaceOrderSummaryProps) => {
  return (
    <StyledPlaceOrderSummary>
      <div className="order-summary-inner">
        <div className="order-summary-row">
          <div className="order-summary-key">Items</div>
          <div className="order-summary-value">{data.itemsPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Shipping</div>
          <div className="order-summary-value">{data.shippingPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Tax</div>
          <div className="order-summary-value">{data.taxPrice} €</div>
        </div>

        <div className="order-summary-row">
          <div className="order-summary-key">Total</div>
          <div className="order-summary-value">{data.totalPrice} €</div>
        </div>

        {isLoading ? (
          <div className="order-summary-row-btn">
            <Loader />
          </div>
        ) : (
          <div className="order-summary-row-btn">
            {itemListLength === 0 ? (
              <button className="btn-disabled">{btnText}</button>
            ) : (
              <button
                className="btn-active"
                type="submit"
                onClick={onPlaceOrder}
              >
                {btnText}
              </button>
            )}
          </div>
        )}
      </div>
    </StyledPlaceOrderSummary>
  );
};

export default PlaceOrderSummary;
