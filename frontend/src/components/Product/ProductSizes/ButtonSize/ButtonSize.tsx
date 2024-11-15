import { StyledButtonSize } from '../ButtonSize/StyledButtonSize';
import { ProductSize } from '../../models';

type ProductSizeProps = {
  sizeData: ProductSize;
};

const ButtonSize = ({ sizeData }: ProductSizeProps) => {
  return (
    <StyledButtonSize>{`EU ${sizeData.size.toString()}`}</StyledButtonSize>
  );
};

export default ButtonSize;
