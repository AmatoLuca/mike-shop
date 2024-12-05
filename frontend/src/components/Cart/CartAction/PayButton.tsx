import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPayButton } from './StyledPayButton';

const PayButton = () => {
  const navigate = useNavigate();

  const checkoutHandler = useCallback(() => {
    navigate('/login?redirect=/shipping');
  }, [navigate]);

  return <StyledPayButton onClick={checkoutHandler}>Checkout</StyledPayButton>;
};

export default PayButton;
