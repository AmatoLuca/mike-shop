import { useState } from 'react';
import { StyledWidjet } from './StyledWidjet';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa6';
import { CartProductComponentProps } from '../models';
import { useCallback } from 'react';
import { Product } from '../../models';
import useCheckProductOutOfStock from '../../../hooks/useCheckProductOutOfStock';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';
import useShowMessage from '../../../hooks/useShowMessage';
import Message from './Message/Message';
const NOT_IN_STOCK_MESSAGE =
  "You can't add other item of these product. Out of stock, sorry!";

const Widjet = ({ product }: CartProductComponentProps) => {
  const [quantity, setQuantity] = useState(product.qty);

  const isTheQuantityOutOfStock = useCheckProductOutOfStock(
    product._id,
    product.sizeChosen
  );

  const { isShowMessage } = useShowMessage(isTheQuantityOutOfStock);

  const { qty } = product;

  const dispatch = useDispatch();

  const addToCartHandler = useCallback(
    (item: Product, quantity: number) => {
      if (isTheQuantityOutOfStock) {
        console.log('@@@ product out of stock!');
        return;
      } else {
        setQuantity(quantity + 1);
        dispatch(addToCart({ ...item, qty: quantity + 1 }));
      }
    },
    [isTheQuantityOutOfStock, dispatch]
  );

  const removeFromCartHandler = useCallback(
    (product: Product) => {
      dispatch(removeFromCart(product));
    },
    [dispatch]
  );

  const DeleteButton = (
    <button
      className="widjet-btn-minus"
      onClick={() => removeFromCartHandler(product)}
    >
      {qty > 1 ? <FaMinus /> : <FaRegTrashCan />}
    </button>
  );

  return (
    <>
      {isShowMessage && <Message text={NOT_IN_STOCK_MESSAGE} />}
      <StyledWidjet>
        <div className="widjet-container">
          <div className="widjet-inner">
            {DeleteButton}
            <div className="widjet-counter">{product.qty}</div>
            <button
              className="widjet-btn-plus"
              onClick={() => addToCartHandler(product, quantity)}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <button className="widjet-btn-favorite">
          <FaRegHeart />
        </button>
      </StyledWidjet>
    </>
  );
};

export default Widjet;
