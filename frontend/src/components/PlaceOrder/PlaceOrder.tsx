import { useEffect, useCallback, useState } from 'react';
import { StyledPlaceOrder } from './StyledPlaceOrder';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import { GetCart } from '../../redux/selectors';
import { useCreateOrderMutation } from '../../redux/slices/orderApiSlice';
import { clearCartItems } from '../../redux/slices/cartSlice';
import PlaceOrderInfo from './PlaceOrderInfo/PlaceOrderInfo';
import { PlaceOrderTitle } from './models';
import PlaceOrderInfoItem from './PlaceOrderInfoItem/PlaceOrderInfoItem';
import CartProduct from '../Cart/CartProduct/CartProduct';
import PlaceOrderSummary from './PlaceOrderSummary/PlaceOrderSummary';
import { CreateOrderPostRequest } from '../../redux/hooks';
import Message from '../Message/Message';
import useShowMessage from '../../hooks/useShowMessage';
import { MessageVariant } from '../Message/models';
import { useDispatch } from 'react-redux';

const PlaceOrder = () => {
  const CartState = GetCart();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createOrder, { isLoading, error }]: CreateOrderPostRequest =
    useCreateOrderMutation();

  const { isShowMessage } = useShowMessage(errorMessage);

  const placeOrderHandler = useCallback(async () => {
    try {
      // Let's add image prop as Order schema model require it see: orderModel.js
      const cart = CartState.cartItems.map((item) => {
        return {
          ...item,
          image: item.images[0],
        };
      });

      const res = await createOrder({
        orderItems: cart,
        shippingAddress: CartState.shippingAddress,
        paymentMethod: CartState.paymentMethod,
        itemsPrice: CartState.itemsPrice,
        shippingPrice: CartState.shippingPrice,
        taxPrice: CartState.taxPrice,
        totalPrice: CartState.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(
          error.message ||
            'Sorry, an error occurred while trying to create the order.'
        );
      }
    }
  }, [createOrder, CartState, dispatch, navigate, clearCartItems]);

  useEffect(() => {
    if (!CartState.shippingAddress.address) {
      navigate('/shipping');
    } else if (!CartState.paymentMethod) {
      navigate('/payment');
    }
  }, [CartState.shippingAddress.address, CartState.paymentMethod, navigate]);

  useEffect(() => {
    setErrorMessage(error?.data?.message || error?.error);
  }, [error]);

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage as string}
        />
      )}
      <CheckoutSteps step1 step2 step3 step4 />
      <StyledPlaceOrder>
        <div className="place-order-col-1">
          <PlaceOrderInfo title={PlaceOrderTitle.SHIPPING}>
            {Object.entries(CartState.shippingAddress).map(([key, value]) => (
              <PlaceOrderInfoItem key={key} keyItem={key} valueItem={value} />
            ))}
          </PlaceOrderInfo>

          <PlaceOrderInfo title={PlaceOrderTitle.METHOD}>
            <PlaceOrderInfoItem
              keyItem={'Method'}
              valueItem={CartState.paymentMethod}
            />
          </PlaceOrderInfo>

          <PlaceOrderInfo title={PlaceOrderTitle.ITEMS}>
            {CartState.cartItems.map((productItem) => (
              <CartProduct
                product={productItem}
                isUseWidjet={false}
                key={productItem._id}
              />
            ))}
          </PlaceOrderInfo>
        </div>
        <div className="place-order-col-2">
          <PlaceOrderInfo title={PlaceOrderTitle.SUMMARY}>
            <PlaceOrderSummary
              isLoading={isLoading}
              onPlaceOrder={placeOrderHandler}
              data={{
                itemsPrice: CartState.itemsPrice || '',
                shippingPrice: CartState.shippingPrice || '',
                taxPrice: CartState.taxPrice || '',
                totalPrice: CartState.totalPrice || '',
              }}
              btnText={'Place Order'}
              itemListLength={CartState.cartItems.length}
            />
          </PlaceOrderInfo>
        </div>
      </StyledPlaceOrder>
    </>
  );
};

export default PlaceOrder;
