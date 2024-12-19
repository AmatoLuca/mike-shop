import { useEffect } from 'react';
import { StyledPlaceOrder } from './StyledPlaceOrder';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import { GetCart } from '../../redux/selectors';
import { useCreateOrderMutation } from '../../redux/slices/orderApiSlice';
import { clearCartItems } from '../../redux/slices/cartSlice';
import PlaceOrderInfo from './PlaceOrderInfo/PlaceOrderInfo';
import { PlaceOrderTitle } from './models';
import PlaceOrderInfoItem from './PlaceOrderInfoItem/PlaceOrderInfoItem';
import CartProduct from '../Cart/CartProduct/CartProduct';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const CartState = GetCart();

  useEffect(() => {
    if (!CartState.shippingAddress.address) {
      navigate('/shipping');
    } else if (!CartState.paymentMethod) {
      navigate('/payment');
    }
  }, [CartState.shippingAddress.address, CartState.paymentMethod, navigate]);

  return (
    <StyledPlaceOrder>
      <CheckoutSteps step1 step2 step3 step4 />
      <PlaceOrderInfo title={PlaceOrderTitle.SHIPPING}>
        {Object.entries(CartState.shippingAddress).map(([key, value]) => (
          <PlaceOrderInfoItem key={key} keyItem={key} valueItem={value} />
        ))}
      </PlaceOrderInfo>

      <PlaceOrderInfo title={PlaceOrderTitle.METHOD}>
        <PlaceOrderInfoItem
          keyItem={'Method'}
          valueItem={CartState.paymentMethod}
        />
      </PlaceOrderInfo>

      <PlaceOrderInfo title={PlaceOrderTitle.ITEMS}>
        {CartState.cartItems.map((productItem) => (
          <CartProduct
            product={productItem}
            isUseWidjet={false}
            key={productItem._id}
          />
        ))}
      </PlaceOrderInfo>
    </StyledPlaceOrder>
  );
};

export default PlaceOrder;
