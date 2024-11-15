import { StyledButtonSize } from '../ButtonSize/StyledButtonSize';
import { SizesStateProps } from '../../models';

type ProductSizeProps = {
  sizeData: SizesStateProps;
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
      $isActive={sizeData.isActive}
    >{`EU ${sizeData.size.toString()}`}</StyledButtonSize>
  );
};

export default ButtonSize;
