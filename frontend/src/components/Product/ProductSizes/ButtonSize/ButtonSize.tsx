import { StyledButtonSize } from '../ButtonSize/StyledButtonSize';
import { ProductSize } from '../../models';

type ProductSizeProps = {
  sizeData: ProductSize;
  onSelectSize: (id: number) => void;
};

const ButtonSize = ({ sizeData, onSelectSize }: ProductSizeProps) => {
  let isButtonDisabled = false;

  if (sizeData.countInStock === 0) {
    isButtonDisabled = true;
  }

  return (
    <StyledButtonSize
      disabled={isButtonDisabled}
      onClick={() => onSelectSize(sizeData.id)}
    >{`EU ${sizeData.size.toString()}`}</StyledButtonSize>
  );
};

export default ButtonSize;
