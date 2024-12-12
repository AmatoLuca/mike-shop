import { createSlice } from '@reduxjs/toolkit';
import { UserInfoState } from '../models';

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
    return {
      userInfo: {
        email: null,
        password: null,
        name: null,
      },
    };
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
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
