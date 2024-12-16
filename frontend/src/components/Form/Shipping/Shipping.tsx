import { useState, useCallback } from 'react';
import { StyledShipping } from './StyledShipping';
import useShowMessage from '../../../hooks/useShowMessage';
import Message from '../../../components/Message/Message';
import { MessageVariant } from '../../../components/Message/models';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveShippingAddress } from '../../../redux/slices/cartSlice';
import { GetCart } from '../../../redux/selectors';

const Shipping = () => {
  const CartState = GetCart();
  const { shippingAddress } = CartState;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { isShowMessage } = useShowMessage(errorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (
        address === '' ||
        city === '' ||
        postalCode === '' ||
        country === ''
      ) {
        setErrorMessage(
          'Please fill in all required fields to ensure your submission is complete. Thank you!'
        );
        return;
      }

      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      navigate('/payment');
    },
    [dispatch, navigate, address, city, postalCode, country]
  );

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage || 'Something wrong with Login action.'}
        />
      )}
      <StyledShipping>
        <h1>Shipping Options</h1>

        <form onSubmit={submitHandler}>
          <div className="form-row">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="postal"
              id="postal"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="form-row login-btn-row">
            <button type="submit">Continue</button>
          </div>
        </form>
      </StyledShipping>
    </>
  );
};

export default Shipping;
