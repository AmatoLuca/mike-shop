import { useMemo } from 'react';
import { StyledButtonSize } from '../ButtonSize/StyledButtonSize';
import { ProductSize } from '../../models';

type ProductSizeProps = {
  sizeData: ProductSize;
};

const ButtonSize = ({ sizeData }: ProductSizeProps) => {
  const isButtonDisabled = useMemo(() => {
    if (sizeData.countInStock === 0) {
      return true;
    }
    return false;
  }, [sizeData]);

  return (
    <StyledButtonSize
      disabled={isButtonDisabled}
    >{`EU ${sizeData.size.toString()}`}</StyledButtonSize>
  );
};

export default ButtonSize;
