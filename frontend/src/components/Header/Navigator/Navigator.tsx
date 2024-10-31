import { StyledNavigator } from './Navigator.styled';
import Brand from '../Brand/Brand';
import {
  PiShoppingBagLight,
  PiHeartStraightLight,
  PiUserLight,
} from 'react-icons/pi';
import { CiSearch } from 'react-icons/ci';

const Navigator = () => {
  return (
    <StyledNavigator>
      <div className="grid-area-1">
        <Brand />
      </div>
      <div className="grid-area-2">
        <CiSearch />
        <PiHeartStraightLight />
      </div>
      <div className="grid-area-3">
        <PiUserLight />
        <PiShoppingBagLight />
      </div>
      <div className="grid-area-4"></div>
      <div className="grid-area-5"></div>
      <div className="grid-area-6"></div>
    </StyledNavigator>
  );
};

export default Navigator;
