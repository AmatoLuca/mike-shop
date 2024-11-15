export type ProductSize = {
  id: number;
  size: number;
  countInStock: number;
};

export type ProductSizeProps = { sizes: ProductSize[] };
