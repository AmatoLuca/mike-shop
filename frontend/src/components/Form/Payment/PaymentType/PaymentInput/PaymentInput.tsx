import { useCallback } from 'react';
import { StyledPaymentInput } from './StyledPaymentInput';
import { PaymentInputProps } from '../../models';

const PaymentInput = ({ isActive, setIsActive }: PaymentInputProps) => {
  const clickHandler = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive, setIsActive]);

  return (
    <StyledPaymentInput $isActive={isActive}>
      <div className="input-method " onClick={clickHandler}></div>
    </StyledPaymentInput>
  );
};

export default PaymentInput;
