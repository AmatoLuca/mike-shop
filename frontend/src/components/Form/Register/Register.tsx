import { useState, useCallback, useEffect } from 'react';
import { StyledRegister } from './StyledRegister';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../../redux/slices/usersApiSlice';
import { setCredentials } from '../../../redux/slices/authSlice';
import { RegisterPostRequest } from '../../../redux/hooks';
import { GetUserInfo } from '../../../redux/selectors';
import useShowMessage from '../../../hooks/useShowMessage';
import Message from '../../../components/Message/Message';
import { MessageVariant } from '../../../components/Message/models';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [register, { isLoading }]: RegisterPostRequest = useRegisterMutation();

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

      if (
        email === '' ||
        password === '' ||
        name === '' ||
        confirmPassword === ''
      ) {
        setErrorMessage(
          'Please fill in all required fields to ensure your submission is complete. Thank you!'
        );
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("The password you've insert is not correct");
        return;
      } else {
        try {
          const res = await register({
            userInfo: {
              email: email,
              password: password,
              name: name,
            },
          }).unwrap();

          dispatch(setCredentials(res));
          navigate(redirect);
        } catch (error: any) {
          setErrorMessage(error.data.message);
          console.log('@@@ Error', error);
        }
      }
    },
    [
      UserInfoState,
      dispatch,
      navigate,
      Register,
      setCredentials,
      email,
      password,
      name,
      confirmPassword,
    ]
  );

  useEffect(() => {
    if (UserInfoState.email && UserInfoState.password) {
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
      <StyledRegister>
        <h1>It's better as a member. Enter your credentials to join us.</h1>
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-row">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="form-row login-btn-row">
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <button type="submit">Join Us</button>
            )}
          </div>

          <div className="form-row login-register">
            <span>Already a member?</span>
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Sign Up
            </Link>
          </div>
        </form>
      </StyledRegister>
    </>
  );
};

export default Register;
