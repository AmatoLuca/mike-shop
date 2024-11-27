import { ReactNode } from 'react';

export type Color = 'black' | 'white';

export type ButtonComponentProps = {
  children: ReactNode;
  $inputColor: Color;
  countInStock?: number | undefined;
};
