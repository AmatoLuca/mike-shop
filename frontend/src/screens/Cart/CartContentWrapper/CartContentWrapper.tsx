import React from 'react';
import { StyledCartContentWrapper } from './StyledCartContentWrapper';
import CartContentMain from './CartContentMain/CartContentMain';
import CartContentSummary from './CartContentSummary/CartContentSummary';

const CartContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <StyledCartContentWrapper>{children}</StyledCartContentWrapper>;
};

CartContentWrapper.Main = CartContentMain;
CartContentWrapper.Summary = CartContentSummary;

export default CartContentWrapper;
