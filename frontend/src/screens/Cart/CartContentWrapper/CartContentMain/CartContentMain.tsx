import React from 'react';
import { StyledCartContentMain } from './StyledCartContentMain';

const CartContentMain = ({ children }: { children: React.ReactNode }) => {
  return <StyledCartContentMain>{children}</StyledCartContentMain>;
};

export default CartContentMain;
