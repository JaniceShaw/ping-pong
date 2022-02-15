import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postLoginData } from '../../Hooks/DataFetching';

export const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState({});
  const [logedIn, setLogedIn] = useState(false);
  const [userData, setUserData] = useState({});

  if (response === '200') {
    setLogedIn(true);
    // console.log('check to see if ever is true');
    //this is never used -- delete
  }

  // for react router to change page
  let navigate = useNavigate();
  const HomeLink = () => {
    navigate('/');
  };

  const loginLink = () => {
    navigate('/login');
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    postLoginData('auth/', { email: email, password: password }, setResponse);
  };

  // hook version - componentDidMount
  useEffect(() => {
    if (response === 200) {
      HomeLink();
    }
    if (localStorage.getItem('token')) {
      setLogedIn(true);
    }
  }, [response]);

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className='loginForm w-full max-w-sm  text-center m-auto'>
        <h1 className='text-xl mt-3 pb-6 font-bold'>Login Page</h1>
        <form action='' className='flex justify-center flex-col mt-5'>
          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='email'
              required
              placeholder='e-Mail'
              onChange={handleEmailInput}
              id='email'
            />
            <label htmlFor='email' className='login-label'>
              Email address
            </label>
            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {response['email']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='password'
              placeholder='password'
              onChange={handlePasswordInput}
              id='password'
            />
            <label htmlFor='password' className='login-label'>
              Password
            </label>
            <div
              className='text-xs text-red-500 h-3 text-left'
              id='passwordHelp'
            >
              {response['password']}
            </div>
          </div>

          <input
            type='submit'
            className='btn'
            value='Login'
            onClick={handleSignIn}
          />
          <div className='text-sm text-red-500 h-8 mt-4' id='passwordHelp'>
            {response['detail']}
          </div>
        </form>
        <div className='mt-4'>
          <Link to='/about' className='underline underline-offset-2'>
            What is Ping-Pong?
          </Link>
        </div>
      </div>
    </>
  );
};
