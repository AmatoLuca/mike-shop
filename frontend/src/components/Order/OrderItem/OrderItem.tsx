import { StyledOrderItem } from './StyledOrderItem';
import { Link } from 'react-router-dom';
import { OrderItemProps } from '../models';
import PlaceOrderInfoItem from '../../PlaceOrder/PlaceOrderInfoItem/PlaceOrderInfoItem';

const Item = ({ productItem }: OrderItemProps) => {
  return (
    <StyledOrderItem>
      <div className="cart-product">
        <Link to={`/product/${productItem._id}`}>
          <div className="cart-product-image">
            <img src={productItem.image} alt={productItem.name} />
          </div>
        </Link>

        <div className="cart-product-details">
          <div className="cart-product-info">
            <PlaceOrderInfoItem keyItem={'Name'} valueItem={productItem.name} />
            <PlaceOrderInfoItem
              keyItem={'Qty'}
              valueItem={`${productItem.qty}`}
            />
            <PlaceOrderInfoItem
              keyItem={'Price'}
              valueItem={`${productItem.price * productItem.qty}`}
            />
          </div>
        </div>
      </div>
    </StyledOrderItem>
  );
};

export default Item;
