import { ProfileOrderData } from '../../models';
import { StyledItemContent } from './StyledItemContent';

const ItemContent = ({ orderData }: ProfileOrderData) => {
  return (
    <StyledItemContent>
      <div className="profile-orders-thumbnail">
        <img src={orderData.image} alt="order-thumbnail-product" />
      </div>

      <div className="profile-orders-info">
        <div className="profile-orders-info-regular">{`ID order ${orderData._id.substring(
          0,
          10
        )}`}</div>
        <div className="profile-orders-info-main">{orderData.name}</div>
        <div className="profile-orders-info-regular">{`Size ${orderData.sizeChosen}`}</div>
        <div className="profile-orders-info-regular">{`Price ${orderData.price}`}</div>
        <div className="profile-orders-info-regular">{`Prod. ${orderData.product.substring(
          0,
          10
        )}`}</div>
      </div>
    </StyledItemContent>
  );
};

export default ItemContent;
