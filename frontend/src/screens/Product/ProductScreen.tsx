import { StyledProductScreen } from './StyledProductScreen';
import { useParams } from 'react-router-dom';
import products from '../../products';
import SliderMobile from '../../components/Product/SliderMobile';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((product) => product._id === productId);
  console.log('@@@', product);

  return (
    <StyledProductScreen>
      <SliderMobile product={product} />
    </StyledProductScreen>
  );
};

export default ProductScreen;
