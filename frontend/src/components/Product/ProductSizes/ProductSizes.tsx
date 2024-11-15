import { StyledProductSizes } from './StyledProductSizes';
import { ProductSizeProps } from '../models';
import ButtonSize from './ButtonSize/ButtonSize';

const ProductSizes = ({ sizes }: ProductSizeProps) => {
  console.log(sizes);
  return (
    <StyledProductSizes>
      {sizes.map((size) => (
        <ButtonSize sizeData={size} />
      ))}
    </StyledProductSizes>
  );
};

export default ProductSizes;
