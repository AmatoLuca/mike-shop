import { StyledPlaceOrderInfo } from './StyledPlaceOrderInfo';
import { PlaceOrderInfoProps } from '../models';
import PlaceOrderInfoItem from '../PlaceOrderInfoItem/PlaceOrderInfoItem';

const PlaceOrderInfo = ({ title, children }: PlaceOrderInfoProps) => {
  return (
    <StyledPlaceOrderInfo>
      <h2 className="order-info-title">{title}</h2>
      {children}
    </StyledPlaceOrderInfo>
  );
};

PlaceOrderInfo.item = PlaceOrderInfoItem;

export default PlaceOrderInfo;
