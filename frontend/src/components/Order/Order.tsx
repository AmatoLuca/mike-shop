import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledOrder } from './StyledOrder';
import { OrderIdParams, OrderTitle, InfoColor, OrderItem } from './models';
import { GetOrderDetailsRequest, DoPayOrderRequest } from '../../redux/hooks';
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
} from '../../redux/slices/orderApiSlice';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import useShowMessage from '../../hooks/useShowMessage';
import { MessageVariant } from '../Message/models';
import PlaceOrderInfo from '../PlaceOrder/PlaceOrderInfo/PlaceOrderInfo';
import PlaceOrderInfoItem from '../PlaceOrder/PlaceOrderInfoItem/PlaceOrderInfoItem';
import Info from './Info/Info';
import Item from './OrderItem/Item';
import PlaceOrderSummary from '../PlaceOrder/PlaceOrderSummary/PlaceOrderSummary';

const Order = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { isShowMessage } = useShowMessage(errorMessage);
  const { id: orderId } = useParams<OrderIdParams>();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  }: GetOrderDetailsRequest = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: isLoadingPay }]: DoPayOrderRequest =
    usePayOrderMutation();

  console.log('@@@ order:', order);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage as string}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <StyledOrder>
          <div className="place-order-col-1">
            {/* {<h1>Order: {order._id}</h1>} */}
            <PlaceOrderInfo title={OrderTitle.SHIPPING}>
              <PlaceOrderInfoItem
                keyItem={'Name'}
                valueItem={order.user.name}
              />

              <PlaceOrderInfoItem
                keyItem={'Email'}
                valueItem={order.user.email}
              />

              {Object.entries(order.shippingAddress).map(([key, value]) => (
                <PlaceOrderInfoItem
                  key={key}
                  keyItem={key}
                  valueItem={value as string}
                />
              ))}

              {order.isDelivered ? (
                <Info
                  text={`Delivered on ${order.deliveredAt}`}
                  color={InfoColor.SUCCESS}
                />
              ) : (
                <Info text={'Not Delivered'} color={InfoColor.DANGER} />
              )}
            </PlaceOrderInfo>

            <PlaceOrderInfo title={OrderTitle.METHOD}>
              <PlaceOrderInfoItem
                keyItem={'Method'}
                valueItem={order.paymentMethod}
              />

              {order.isPaid ? (
                <Info
                  text={`Paid on ${order.paidAt}`}
                  color={InfoColor.SUCCESS}
                />
              ) : (
                <Info text={'Not Paid'} color={InfoColor.DANGER} />
              )}
            </PlaceOrderInfo>

            <PlaceOrderInfo title={OrderTitle.ITEMS}>
              {order.orderItems.map((productItem: OrderItem) => {
                return <Item productItem={productItem} key={productItem._id} />;
              })}
            </PlaceOrderInfo>
          </div>

          <div className="place-order-col-2">
            <PlaceOrderInfo title={OrderTitle.SUMMARY}>
              <PlaceOrderSummary
                isLoading={isLoading}
                onPlaceOrder={() => {}}
                data={{
                  itemsPrice: order.itemsPrice,
                  shippingPrice: order.shippingPrice,
                  taxPrice: order.taxPrice,
                  totalPrice: order.totalPrice,
                }}
                btnText={'PayPal'}
                itemListLength={order.orderItems.length}
              />
            </PlaceOrderInfo>
          </div>
        </StyledOrder>
      )}
    </>
  );
};

export default Order;
