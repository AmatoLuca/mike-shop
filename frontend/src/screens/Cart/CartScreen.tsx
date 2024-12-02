//import React from 'react';
import { StyledCartScreen } from './StyledCartScreen';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetCartItems } from '../../redux/selectors';
import CartHeader from './CartHeader/CartHeader';
import NoItem from './NoItem/NoItem';
import CartContentWrapper from './CartContentWrapper/CartContentWrapper';

const CartScreen = () => {
  const cartItemsState = GetCartItems();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StyledCartScreen>
      <CartHeader />
      {cartItemsState.length === 0 && <NoItem />}
      <CartContentWrapper>
        <CartContentWrapper.Main>df</CartContentWrapper.Main>
        <CartContentWrapper.Summary>g</CartContentWrapper.Summary>
      </CartContentWrapper>
    </StyledCartScreen>
  );
};

export default CartScreen;
