export type ProductSize = {
  id: number;
  size: number;
  countInStock: number;
};

export type SizesStateProps = {
  id: number;
  size: number;
  countInStock: number;
  isActive: boolean;
};

export type ProductSizeProps = { sizes: ProductSize[] };
