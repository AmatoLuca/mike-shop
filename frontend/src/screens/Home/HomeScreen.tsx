import { StyledHomeScreen } from './StyledHomeScreen';
import Carousel from '../../components/Carousel/Carousel';
import Spot from '../../components/Spot/Spot';
import Featured from '../../components/sections/Featured/Featured';

const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <Spot />
      <Featured />
      <Carousel />
    </StyledHomeScreen>
  );
};

export default HomeScreen;
