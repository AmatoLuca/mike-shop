import { StyledCartScreen } from './StyledCartScreen';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetCart } from '../../redux/selectors';
import CartHeader from './CartHeader/CartHeader';
import NoItem from './NoItem/NoItem';
import CartContentWrapper from './CartContentWrapper/CartContentWrapper';
import CartProduct from './CartProduct/CartProduct';
import CartSummary from './CartSummary/CartSummary';

const CartScreen = () => {
  const CartState = GetCart();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledCartScreen>
      <CartHeader />
      {CartState.cartItems.length === 0 && <NoItem />}
      <CartContentWrapper>
        <CartContentWrapper.Main>
          {CartState.cartItems.map((item) => {
            return <CartProduct key={item._id} product={item} />;
          })}
        </CartContentWrapper.Main>
        <CartContentWrapper.Summary>
          <CartSummary />
        </CartContentWrapper.Summary>
      </CartContentWrapper>
    </StyledCartScreen>
  );
};

export default CartScreen;
