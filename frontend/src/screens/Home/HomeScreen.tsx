//import React from 'react';
//import products from '../../products';
import { StyledHomeScreen } from './StyledHomeScreen';
import Carousel from '../../components/Carousel/Carousel';
import Spot from '../../components/Spot/Spot';

const HomeScreen = () => {
  return (
    <StyledHomeScreen>
      <Spot />
      <Carousel />
    </StyledHomeScreen>
  );
};

export default HomeScreen;
