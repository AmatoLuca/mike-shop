import { CartProductComponentProps } from '../models';
import { StyledCartProduct } from './StyledCartProduct';
import { Link } from 'react-router-dom';
import Widjet from '../Widjet/Widjet';

const CartProduct = ({ product }: CartProductComponentProps) => {
  return (
    <StyledCartProduct>
      <div className="cart-product">
        <Link to={`/product/${product._id}`}>
          <div className="cart-product-image">
            <img src={product.images[0]} alt={product.name} />
          </div>
        </Link>

        <div className="cart-product-details">
          <div className="cart-product-info">
            <div className="cart-product-price">{`${product.price} €`}</div>
            <div className="cart-product-name">{product.name}</div>
          </div>
          <div className="cart-product-type">{`${product.brand} Shoes`}</div>
          <div className="cart-product-size">{`Size ${product.sizeChosen}`}</div>
        </div>
      </div>

      <Widjet product={product} />
    </StyledCartProduct>
  );
};

export default CartProduct;
