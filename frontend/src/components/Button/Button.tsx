import { StyledButton } from './StyledButton';
import ButtonDisabled from './ButtonDisabled';
import { ButtonComponentProps } from './models';

const Button = ({
  children,
  $inputColor,
  countInStock,
}: ButtonComponentProps) => {
  return (
    <>
      {countInStock === 0 ? (
        <ButtonDisabled />
      ) : (
        <StyledButton $inputColor={$inputColor}>{children}</StyledButton>
      )}
    </>
  );
};

export default Button;
