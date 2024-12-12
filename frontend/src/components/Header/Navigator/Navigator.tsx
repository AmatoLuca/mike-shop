import Brand from './Brand/Brand';
import SearchItem from './Items/Search/SearchItem';
import FavouritesItem from './Items/Favourites/FavouritesItem';
import UserItem from './Items/User/UserItem';
import CartItem from './Items/Cart/CartItem';
import { StyledNavigator } from './Navigator.styled';
import { Link } from 'react-router-dom';
import UserAuthenticated from './Items/UserAuthenticated/UserAuthenticated';
import { GetUserInfo } from '../../../redux/selectors';

const Navigator = () => {
  const UserInfoState = GetUserInfo();

  return (
    <StyledNavigator>
      <Link to={`/`}>
        <Brand />
      </Link>
      <ul className="nav__menu">
        <li className="nav__menu__item">
          <SearchItem />
        </li>
        <li className="nav__menu__item">
          <FavouritesItem />
        </li>
        <li className="nav__menu__item">
          {UserInfoState?.email ? (
            <UserAuthenticated />
          ) : (
            <Link to={`/login`}>
              <UserItem />
            </Link>
          )}
        </li>
        <li className="nav__menu__item">
          <Link to={`/cart`}>
            <CartItem />
          </Link>
        </li>
      </ul>
    </StyledNavigator>
  );
};

export default Navigator;
