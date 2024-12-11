import { createSlice } from '@reduxjs/toolkit';
import { UserInfoState } from '../models';

const initialState: UserInfoState = (() => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo
    ? JSON.parse(userInfo)
    : {
        userInfo: {
          email: null,
          password: null,
        },
      };
})();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
