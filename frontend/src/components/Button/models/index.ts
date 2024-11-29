import { ReactNode } from 'react';
import { Product } from '../../models';

export type Color = 'black' | 'white';

export type ButtonComponentProps = {
  children: ReactNode;
  $inputColor: Color;
  countInStock?: number | undefined;
  product?: Product;
  size?: number;
};
