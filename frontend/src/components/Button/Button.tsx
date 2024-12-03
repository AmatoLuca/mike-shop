import { useCallback, useMemo } from 'react';
import { StyledButton } from './StyledButton';
import ButtonDisabled from './ButtonDisabled';
import { ButtonComponentProps } from './models';
import { addToCart } from '../../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Button = ({
  children,
  $inputColor,
  countInStock,
  product,
  size,
  isOutOfStock,
}: ButtonComponentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isButtonDisabled = useMemo(() => {
    if (countInStock === 0 || !size || isOutOfStock) {
      return true;
    }
    return false;
  }, [countInStock, size, isOutOfStock]);

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart({ ...product, sizeChosen: size }));
    navigate('/cart');
  }, [product, dispatch, size]);

  return (
    <>
      {isButtonDisabled ? (
        <ButtonDisabled />
      ) : (
        <StyledButton $inputColor={$inputColor} onClick={addToCartHandler}>
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
