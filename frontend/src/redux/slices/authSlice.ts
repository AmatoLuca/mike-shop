import { createSlice } from '@reduxjs/toolkit';
import { UserInfoState } from '../models';

const UserInfoDefault: UserInfoState = {
  userInfo: {
    email: null,
    password: null,
    name: null,
  },
};

const initialState: UserInfoState = (() => {
  const userInfo = localStorage.getItem('userInfo');

  if (userInfo) {
    const parsing = JSON.parse(userInfo);
    return {
      userInfo: {
        email: parsing.email,
        password: parsing.password,
        name: parsing.name,
      },
    };
  } else {
    return UserInfoDefault;
  }
})();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = {
        email: UserInfoDefault.userInfo.email,
        password: UserInfoDefault.userInfo.password,
        name: UserInfoDefault.userInfo.name,
      };
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
