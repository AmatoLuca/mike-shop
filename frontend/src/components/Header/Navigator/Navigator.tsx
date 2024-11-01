import Brand from './Brand/Brand';
import Search from './Icons/Search/Search';
import Favourites from './Icons/Favourites/Favourites';
import User from './Icons/User/User';
import Cart from './Icons/Cart/Cart';
import { StyledNavigator } from './Navigator.styled';

const Navigator = () => {
  return (
    <StyledNavigator>
      <div className="nav__main-menu">
        <div className="nav__main-menu__brand">
          <Brand />
        </div>

        <div className="nav__main__menu__icons">
          <Search />
          <Favourites />
        </div>
      </div>

      <div className="nav__secondary-menu">
        <User />
        <Cart />
      </div>
    </StyledNavigator>
  );
};

export default Navigator;
