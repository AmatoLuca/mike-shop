import { useState } from 'react';
import { StyledUserAuthenticated } from './StyledUserAuthenticated';
import { GetUserInfo } from '../../../../../redux/selectors';

const UserAuthenticated = () => {
  const [isOpen, setIsOpen] = useState(false);
  const UserInfoState = GetUserInfo();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <StyledUserAuthenticated>
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="dropdown-button">{UserInfoState.name}</button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="filler"></div>
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item">Logout</div>
          </div>
        )}
      </div>
    </StyledUserAuthenticated>
  );
};

export default UserAuthenticated;
