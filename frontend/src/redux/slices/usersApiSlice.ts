import { USERS_URL } from '../constants';
import { UserInfoState } from '../models';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // @@UserInfoState : input parameter
    // @@void      : output parameter
    login: builder.mutation<UserInfoState, void>({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
