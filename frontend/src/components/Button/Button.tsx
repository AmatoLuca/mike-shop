import { useCallback } from 'react';
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
}: ButtonComponentProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart({ ...product }));
    navigate('/cart');
  }, [product, dispatch]);

  return (
    <>
      {countInStock === 0 ? (
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
