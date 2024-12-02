import { StyledCartScreen } from './StyledCartScreen';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetCart } from '../../redux/selectors';
import CartHeader from '../../components/Cart/CartHeader/CartHeader';
import NoItem from '../../components/Cart/NoItem/NoItem';
import CartContentLayout from '../../components/Cart/CartContentLayout/CartContentWrapper';
import CartProduct from '../../components/Cart/CartProduct/CartProduct';
import CartSummary from '../../components/Cart/CartSummary/CartSummary';
import CartAction from '../../components/Cart/CartAction/CartAction';

const CartScreen = () => {
  const CartState = GetCart();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledCartScreen>
      <CartHeader />
      {CartState.cartItems.length === 0 && <NoItem />}
      <CartContentLayout>
        <CartContentLayout.Main>
          {CartState.cartItems.map((item) => {
            return <CartProduct key={item._id} product={item} />;
          })}
        </CartContentLayout.Main>
        <CartContentLayout.Summary>
          <CartSummary />
          <CartAction />
        </CartContentLayout.Summary>
      </CartContentLayout>
    </StyledCartScreen>
  );
};

export default CartScreen;
