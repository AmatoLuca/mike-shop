import { useEffect } from 'react';
import { StyledPlaceOrder } from './StyledPlaceOrder';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import { GetCart } from '../../redux/selectors';

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
    </StyledPlaceOrder>
  );
};

export default PlaceOrder;
