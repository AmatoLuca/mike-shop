import { StyledCartAction } from './StyledCartAction';
import PayButton from './PayButton';
import PayButtonDisabled from './PayButtonDisabled';
import { GetCart } from '../../../redux/selectors';

const CartAction = () => {
  const CartState = GetCart();

  return (
    <StyledCartAction>
      {CartState.cartItems.length === 0 ? <PayButtonDisabled /> : <PayButton />}
    </StyledCartAction>
  );
};

export default CartAction;
