import Brand from './Brand/Brand';
import SearchItem from './Items/Search/SearchItem';
import FavouritesItem from './Items/Favourites/FavouritesItem';
import UserItem from './Items/User/UserItem';
import CartItem from './Items/Cart/CartItem';
import { StyledNavigator } from './Navigator.styled';

const Navigator = () => {
  return (
    <StyledNavigator>
      <Brand />
      <ul className="nav__menu">
        <li className="nav__menu__item">
          <SearchItem />
        </li>
        <li className="nav__menu__item">
          <FavouritesItem />
        </li>
        <li className="nav__menu__item">
          <UserItem />
        </li>
        <li className="nav__menu__item">
          <CartItem />
        </li>
      </ul>
    </StyledNavigator>
  );
};

export default Navigator;
