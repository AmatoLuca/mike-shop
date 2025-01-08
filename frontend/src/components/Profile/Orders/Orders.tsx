import { StyledOrders } from './StyledOrders';
import { useGetMyOrdersQuery } from '../../../redux/slices/orderApiSlice';
import { GetOrdersRequest } from '../../../redux/hooks';
import { useMemo } from 'react';
import Loader from '../../Loader/Loader';
import Item from './Item/Item';
import { Order } from '../../Order/models';
import { OrderItem } from './models';
import Message from '../../Message/Message';
import useShowMessage from '../../../hooks/useShowMessage';
import { MessageVariant } from '../../Message/models';

const Orders = () => {
  const {
    data: orders,
    isLoading,
    isError,
  }: GetOrdersRequest = useGetMyOrdersQuery({});

  // Each order got an order id and a list od orderItems.
  // Here we extract every object in each orderItems array and add in it
  // the Id of every order related to
  const completeOrdersList = useMemo(() => {
    const orderItems = orders
      ?.map((order: Order) => {
        return order.orderItems.map((orderTemp) => {
          return { ...orderTemp, _id_order: order._id };
        });
      })
      .flat();

    return orderItems;
  }, [orders]);

  const { isShowMessage } = useShowMessage(isError);

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={isError?.data?.message || isError?.error}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <StyledOrders>
          {completeOrdersList?.map((order: OrderItem) => {
            return <Item orderData={order} key={order._id} />;
          })}
        </StyledOrders>
      )}
    </>
  );
};

export default Orders;
