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

  const completeOrdersList = useMemo(() => {
    const orderItems = orders?.map((order: Order) => order.orderItems).flat();

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
