import { StyledCartItem } from './CartItem.styled';
import { PiShoppingBagLight } from 'react-icons/pi';

const CartItem = () => {
  return (
    <StyledCartItem href="#">
      <PiShoppingBagLight />
    </StyledCartItem>
  );
};

export default CartItem;
