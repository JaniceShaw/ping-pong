import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { postData } from '../../../Hooks/DataFetching';

export const RegisterHelper = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const form = {
    email: email,
  };

  let navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    postData('registration/', form, setError);
    navigate('/register/validation');
  };
  return (
    <>
      <h1 className='text-xl mt-3 pb-6 font-bold'>Register as Helper</h1>
      <br />
      <div className='loginForm w-full max-w-sm  text-center m-auto'>
        <form className='flex justify-center flex-col mt-5'>
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
              {email['email']}
            </div>
          </div>
          <input
            type='submit'
            className='btn'
            value='Register'
            onClick={handleSignUp}
          />
        </form>
        <p>{error}</p>
      </div>

      <Link className='flex justify-center p-6' to='/about'>
        <p>What is ping-pong?</p>
      </Link>
    </>
  );
};
