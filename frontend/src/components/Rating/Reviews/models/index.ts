import { Product } from '../../../models';

export type ReviewsComponentProps = {
  isOpened: boolean;
};

export type ReviewsProps = {
  product: Product;
};

export enum Rating {
  POOR = '1',
  FAIR = '2',
  GOOD = '3',
  VERY_GOOD = '4',
  EXCELLENT = '5',
  NONE = '',
}
