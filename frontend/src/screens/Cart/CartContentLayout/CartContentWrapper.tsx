import React from 'react';
import { StyledCartContentWrapper } from './StyledCartContentWrapper';
import CartContentMain from './CartContentMain/CartContentMain';
import CartContentSummary from './CartContentSummary/CartContentSummary';

const CartContentLayout = ({ children }: { children: React.ReactNode }) => {
  return <StyledCartContentWrapper>{children}</StyledCartContentWrapper>;
};

CartContentLayout.Main = CartContentMain;
CartContentLayout.Summary = CartContentSummary;

export default CartContentLayout;
