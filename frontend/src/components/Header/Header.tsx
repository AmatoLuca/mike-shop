//import React from 'react';
import { StyledHeader } from './Header.styled';
import Brand from './Brand/Brand';
import { PiShoppingBagLight, PiHeartStraightLight } from 'react-icons/pi';
import { LuUser } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <StyledHeader>
      <div className="grid-area-1">
        <Brand />
      </div>
      <div className="grid-area-2">
        <CiSearch />
        <PiHeartStraightLight />
      </div>
      <div className="grid-area-3">
        <LuUser />
        <PiShoppingBagLight />
      </div>
      <div className="grid-area-4"></div>
      <div className="grid-area-5"></div>
      <div className="grid-area-6"></div>
    </StyledHeader>
  );
};

export default Header;
