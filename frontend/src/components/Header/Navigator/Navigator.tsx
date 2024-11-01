import Brand from './Brand/Brand';
import Search from './Icons/Search/Search';
import Favourites from './Icons/Favourites/Favourites';
import User from './Icons/User/User';
import Cart from './Icons/Cart/Cart';
import { StyledNavigator } from './Navigator.styled';

const Navigator = () => {
  return (
    <StyledNavigator>
      <Brand />
      <ul className="nav__menu">
        <li className="nav__menu__item">
          <Search />
        </li>
        <li className="nav__menu__item">
          <Favourites />
        </li>
        <li className="nav__menu__item">
          <User />
        </li>
        <li className="nav__menu__item">
          <Cart />
        </li>
      </ul>
    </StyledNavigator>
  );
};

export default Navigator;
