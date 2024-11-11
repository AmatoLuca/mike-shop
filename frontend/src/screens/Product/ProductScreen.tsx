import React from 'react';
import { StyledProductScreen } from './StyledProductScreen';
import products from '../../products';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((product) => product._id === productId);
  console.log('@@@', product);

  return <div>ProductScreen</div>;
};

export default ProductScreen;
