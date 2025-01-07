import { useState, useEffect, useCallback } from 'react';
import { StyledAccount } from './StyledAccount';
import { useDispatch } from 'react-redux';
import { GetUserInfo } from '../../../redux/selectors';
import { useProfileMutation } from '../../../redux/slices/usersApiSlice';
import { setCredentials } from '../../../redux/slices/authSlice';
import { UpdateUserProfilePostRequest } from '../../../redux/hooks';
import Message from '../../Message/Message';
import useShowMessage from '../../../hooks/useShowMessage';
import { MessageVariant } from '../../Message/models';
import Loader from '../../Loader/Loader';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const UserInfoState = GetUserInfo();

  const { isShowMessage } = useShowMessage(errorMessage);

  const [
    updateProfile,
    { isLoading: loadingUpdateProfile },
  ]: UpdateUserProfilePostRequest = useProfileMutation();

  const dispatch = useDispatch();

  const submitHandler = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (
        name === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
      ) {
        setErrorMessage(
          'Please provide all the informations required to apply changes.'
        );
      }

      if (password !== confirmPassword) {
        setErrorMessage(
          'The old password and the new password do not match. Please try again.'
        );
      } else {
        try {
          const res = await updateProfile({
            _id: UserInfoState._id,
            name,
            email,
            password,
          }).unwrap();

          dispatch(setCredentials(res));
        } catch (error: unknown) {
          if (error instanceof Error) {
            setErrorMessage(
              error.message ||
                'Sorry, an error occurred during user settign updating process.'
            );
          }
        }
      }
    },
    [
      name,
      email,
      password,
      confirmPassword,
      dispatch,
      updateProfile,
      UserInfoState,
    ]
  );

  useEffect(() => {
    if (UserInfoState.name && UserInfoState.email) {
      setName(UserInfoState.name);
      setEmail(UserInfoState.email);
    }
  }, [UserInfoState.name, UserInfoState.email]);

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage as string}
        />
      )}

      {loadingUpdateProfile ? (
        <Loader />
      ) : (
        <StyledAccount>
          <h1>Account Details</h1>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="username"
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
              />
            </div>

            <div className="form-row">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="form-row">
              <input
                type="password"
                name="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <div className="form-row login-btn-row">
              <button>Save</button>
            </div>
          </form>
        </StyledAccount>
      )}
    </>
  );
};

export default Account;
