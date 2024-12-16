import { useCallback, useEffect, useState } from 'react';
import { StyledPayment } from './StyledPayment';
import PymentType from './PaymentType/PymentType';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePaymentMethod } from '../../../redux/slices/cartSlice';
import { GetCart } from '../../../redux/selectors';

const Payment = () => {
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false);
  const paymentMethod = 'PayPal';
  const CartState = GetCart();
  const { shippingAddress } = CartState;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(savePaymentMethod(paymentMethod));
      navigate('/placeorder');
    },
    [dispatch, navigate, savePaymentMethod, paymentMethod]
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  return (
    <StyledPayment>
      <h1>Payment Method</h1>

      <form onSubmit={submitHandler}>
        <PymentType
          infoText={'Paypal or Credit Card'}
          onSelectMethod={setIsPaymentMethodSelected}
        />

        <div className="form-row login-btn-row">
          {isPaymentMethodSelected ? (
            <button type="submit">Continue</button>
          ) : (
            <div className="diabled-btn">Continue</div>
          )}
        </div>
      </form>
    </StyledPayment>
  );
};

export default Payment;
