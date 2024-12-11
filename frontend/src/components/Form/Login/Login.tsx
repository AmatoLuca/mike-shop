import { useState, useCallback } from 'react';
import { StyledLogin } from './StyledLogin';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Submit');
    },
    []
  );

  return (
    <StyledLogin>
      <h1>Enter your email to join us or sign in.</h1>
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
          <button>Sign In</button>
        </div>

        <div className="form-row login-register">
          <span>New Costumer?</span> <Link to="/register">Register</Link>
        </div>
      </form>
    </StyledLogin>
  );
};

export default Login;
