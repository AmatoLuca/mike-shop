import React from 'react';
import { StyledCartContentSummary } from './StyledCartContentSummary';

const CartContentSummary = ({ children }: { children: React.ReactNode }) => {
  return <StyledCartContentSummary>{children}</StyledCartContentSummary>;
};

export default CartContentSummary;
