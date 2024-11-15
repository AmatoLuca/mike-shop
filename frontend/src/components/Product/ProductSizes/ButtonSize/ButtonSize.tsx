import { StyledButtonSize } from '../ButtonSize/StyledButtonSize';
import { ProductSize } from '../../models';

type ProductSizeProps = {
  sizeData: ProductSize;
};

const ButtonSize = ({ sizeData }: ProductSizeProps) => {
  let isButtonDisabled = false;

  if (sizeData.countInStock === 0) {
    isButtonDisabled = true;
  }

  return (
    <StyledButtonSize
      disabled={isButtonDisabled}
    >{`EU ${sizeData.size.toString()}`}</StyledButtonSize>
  );
};

export default ButtonSize;
