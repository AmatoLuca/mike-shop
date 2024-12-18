import { PlaceOrderInfoItemProps } from '../models';
import { StyledPlaceOrderInfoItem } from './StyledPlaceOrderInfoItem';

const PlaceOrderInfoItem = ({
  keyItem,
  valueItem,
}: PlaceOrderInfoItemProps) => {
  return (
    <StyledPlaceOrderInfoItem>
      <div className="order-info-item-key">{keyItem}:</div>
      <div className="order-info-item-value">{valueItem}</div>
    </StyledPlaceOrderInfoItem>
  );
};

export default PlaceOrderInfoItem;
