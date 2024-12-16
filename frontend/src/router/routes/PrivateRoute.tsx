import { useMemo } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { GetUserInfo } from '../../redux/selectors';

const PrivateRoute = () => {
  const UserInfoState = GetUserInfo();

  const isUserInfoFilled = useMemo(() => {
    return UserInfoState.email && UserInfoState.name ? true : false;
  }, [UserInfoState]);

  return isUserInfoFilled ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
