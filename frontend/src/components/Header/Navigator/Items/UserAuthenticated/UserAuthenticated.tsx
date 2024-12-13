import { useState, useCallback } from 'react';
import { StyledUserAuthenticated } from './StyledUserAuthenticated';
import { GetUserInfo } from '../../../../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../../../../redux/slices/usersApiSlice';
import { logout } from '../../../../../redux/slices/authSlice';

const UserAuthenticated = () => {
  const [isOpen, setIsOpen] = useState(false);
  const UserInfoState = GetUserInfo();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const logoutHandler = useCallback(async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }, []);

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
            <div className="dropdown-item" onClick={logoutHandler}>
              Logout
            </div>
          </div>
        )}
      </div>
    </StyledUserAuthenticated>
  );
};

export default UserAuthenticated;
