import { useState, useCallback, useEffect } from 'react';
import { StyledProductSizes } from './StyledProductSizes';
import { ProductSizeProps, SizesStateProps } from '../models';
import ButtonSize from './ButtonSize/ButtonSize';

const ProductSizes = ({ sizes }: ProductSizeProps) => {
  const [sizeState, setSizeState] = useState<SizesStateProps[]>([]);

  const selectSizeHandler = useCallback(
    (id: number) => {
      // Make a state sizes copy to manipulate data
      const sizeStateCopy = [...sizeState];

      const previousSelectedSize = sizeState.find(
        (size) => size.isActive === true
      );

      const previousSelectedSizeIndex = sizeState.findIndex(
        (size) => size.isActive === true
      );

      // First time user click a size
      if (previousSelectedSizeIndex === -1) {
        const sizeToUpdate = sizeStateCopy.find((size) => size.id === id);

        if (sizeToUpdate) {
          sizeToUpdate.isActive = true;
          setSizeState(sizeStateCopy);
          return;
        }
      }

      // User clicked the same size previously selected
      if (previousSelectedSize?.id === id) {
        return;
      }

      // There is a size selected, User picked the new one
      sizeStateCopy[previousSelectedSizeIndex].isActive = false;
      const sizeToUpdate = sizeStateCopy.find((size) => size.id === id);

      if (sizeToUpdate) {
        sizeToUpdate.isActive = true;
      }

      setSizeState(sizeStateCopy);
    },
    [sizeState]
  );

  // Take sizes and for any size object update it and add isActive property
  // to manage here the logic for selected user size
  useEffect(() => {
    const sizesCopy: any = [...sizes];

    sizesCopy.forEach((size: SizesStateProps) => {
      size.isActive = false;
    });

    setSizeState(sizesCopy);
  }, []);

  return (
    <StyledProductSizes>
      {sizeState.map((size) => (
        <ButtonSize
          key={size.id}
          sizeData={size}
          onSelectSize={selectSizeHandler}
        />
      ))}
    </StyledProductSizes>
  );
};

export default ProductSizes;
