import { USERS_URL } from '../constants';
import { UserInfoState } from '../models';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @@UserInfoState : input parameter
    // @@void      : output parameter
    login: builder.mutation<void, UserInfoState>({
      query: (data: UserInfoState) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: { email: data.userInfo.email, password: data.userInfo.password },
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;