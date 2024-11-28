import { StyledCartItem } from './CartItem.styled';
import { PiShoppingBagLight } from 'react-icons/pi';
import Badge from '../Badge/Badge';
import { GetCartItems } from '../../../../../redux/selectors';

const CartItem = () => {
  const cartItemsState = GetCartItems();

  return (
    <StyledCartItem>
      <PiShoppingBagLight />
      {cartItemsState.length > 0 && <Badge />}
    </StyledCartItem>
  );
};

export default CartItem;
