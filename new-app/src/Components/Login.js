import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data.token); // Handle successful login
      setLoginSuccess(true);
      setLoginError(null);
      Cookies.set('jwt', response.data.token, { expires: 7 });
      Cookies.set('user', email, { expires: 7 });
      if (Cookies.get('jwt')) window.location = '/reqsell';
    } catch (error) {
      console.error('Error:', error.response.data); // Handle failed login
      setLoginError('Invalid email or password');
      setLoginSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <div style={{ width: '300px', margin: 'auto' }}>
        <h2>Login</h2>
        {loginSuccess && (
          <div className="alert alert-success" role="alert">
            Login successful!
          </div>
        )}
        {loginError && (
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
