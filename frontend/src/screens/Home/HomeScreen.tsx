import { StyledHomeScreen } from './StyledHomeScreen';
import Carousel from '../../components/Carousel/Carousel';
import Spot from '../../components/Spot/Spot';
//import Rating from '../../components/Rating/Rating';
//import products from '../../products';

const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <Spot />
      <Carousel />

      {/* <Rating
        value={products[0].rating}
        text={`Reviews (${products[0].numReviews})`}
      /> */}
    </StyledHomeScreen>
  );
};

export default HomeScreen;
