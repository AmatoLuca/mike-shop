import { useState, useCallback, useEffect } from 'react';
import { StyledLogin } from './StyledLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../redux/slices/usersApiSlice';
import { setCredentials } from '../../../redux/slices/authSlice';
import { LoginPostRequest } from '../../../redux/hooks';
import { GetUserInfo } from '../../../redux/selectors';
import useShowMessage from '../../../hooks/useShowMessage';
import Message from '../../../components/Message/Message';
import { MessageVariant } from '../../../components/Message/models';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [login, { isLoading }]: LoginPostRequest = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const UserInfoState = GetUserInfo();

  const { isShowMessage } = useShowMessage(errorMessage);

  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const redirect = searchParam.get('redirect') || '/';

  const submitHandler = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (email === '' || password === '') {
        setErrorMessage(
          'Please fill in all required fields to ensure your submission is complete. Thank you!'
        );
        return;
      }

      try {
        const res = await login({
          userInfo: {
            email: email,
            password: password,
            _id: UserInfoState._id,
          },
        }).unwrap();

        dispatch(setCredentials(res));
        navigate(redirect);
      } catch (error: any) {
        setErrorMessage(error.data.message);
        console.log('@@@ Error', error);
      }
    },
    [UserInfoState, dispatch, navigate, login, setCredentials, email, password]
  );

  useEffect(() => {
    if (UserInfoState.email && UserInfoState.name) {
      navigate(redirect);
    }
  }, [UserInfoState, redirect, navigate]);

  return (
    <>
      {isShowMessage && (
        <Message
          variant={MessageVariant.error}
          content={errorMessage || 'Something wrong with Login action.'}
        />
      )}
      <StyledLogin>
        <h1>Enter your email and password to sign in.</h1>
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>

          <div className="form-row login-btn-row">
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <button type="submit">Sign In</button>
            )}
          </div>

          <div className="form-row login-register">
            <span>New Member?</span>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Join Us
            </Link>
          </div>
        </form>
      </StyledLogin>
    </>
  );
};

export default Login;
