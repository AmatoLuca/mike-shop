import { StyledHomeScreen } from './StyledHomeScreen';
import Carousel from '../../components/Carousel/Carousel';
import Spot from '../../components/Spot/Spot';
import Featured from '../../components/sections/Featured/Featured';
import Outwear from '../../components/sections/Outwear/Outwear';

const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <Spot />
      <Featured />
      <Carousel />
      <Outwear />
    </StyledHomeScreen>
  );
};

export default HomeScreen;
