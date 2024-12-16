import { StyledPaymentType } from './StyledPaymentType';
import { PaymentTypeProps } from '../models';
import { useEffect, useState } from 'react';
import PaymentInput from './PaymentInput/PaymentInput';

const PymentType = ({ infoText, onSelectMethod }: PaymentTypeProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onSelectMethod(isChecked);
  }, [isChecked, onSelectMethod]);

  return (
    <StyledPaymentType>
      <div className="payment-type-inner">
        <div className="payment-type-info">{infoText}</div>
        <div className="payment-type-selector">
          <PaymentInput isActive={isChecked} setIsActive={setIsChecked} />
        </div>
      </div>
    </StyledPaymentType>
  );
};

export default PymentType;
