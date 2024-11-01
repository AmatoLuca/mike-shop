import { StyleFavouritesItem } from './FavouritesItem.styled';
import { PiHeartStraightLight } from 'react-icons/pi';

const FavouritesItem = () => {
  return (
    <StyleFavouritesItem href="#">
      <PiHeartStraightLight />
    </StyleFavouritesItem>
  );
};

export default FavouritesItem;
