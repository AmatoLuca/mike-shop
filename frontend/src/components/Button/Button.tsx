import { StyledButton } from './StyledButton';
import { ButtonComponentProps } from './models';

const Button = ({ children, $inputColor }: ButtonComponentProps) => {
  return <StyledButton $inputColor={$inputColor}>{children}</StyledButton>;
};

export default Button;
