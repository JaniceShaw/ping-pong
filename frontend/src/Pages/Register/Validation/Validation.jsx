import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Validation = () => {
  const [password, setPassword] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  let navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleCodeInput = (event) => {
    setCode(event.target.value);
  };
  return (
    <>
      <h1 className='text-xl mt-3 pb-6 font-bold'>Thanks for registering!</h1>
      <br />
      <p className='text-xl mt-3 pb-6 font-bold'>
        Please check your email for your verification code and login with it
        below.
      </p>
      <br />
      <div className='loginForm w-full max-w-sm  text-center m-auto'>
        <form className='flex justify-center flex-col mt-5'>
          <input
            className='field-input-login peer'
            type='email'
            required
            placeholder='e-Mail'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
          />
          <label htmlFor='email' className='login-label'>
            Email address
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {email['email']}
          </div>

          <input
            className='field-input-login peer'
            type='username'
            required
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            id='username'
          />
          <label htmlFor='username' className='login-label'>
            Username
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {username['username']}
          </div>

          <input
            className='field-input-login peer'
            type='username'
            required
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
            id='username'
          />
          <label htmlFor='username' className='login-label'>
            Username
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {username['username']}
          </div>

          <input
            className='field-input-login peer'
            type='password_repeat'
            required
            placeholder='password_repeat'
            onChange={(e) => setUsername(e.target.value)}
            id='password_repeat'
          />
          <label htmlFor='password_repeat' className='login-label'>
            Password Repeat
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {username['username']}
          </div>

          <input
            className='field-input-login peer'
            type='type'
            required
            placeholder='type'
            onChange={(e) => setUsername(e.target.value)}
            id='type'
          />
          <label htmlFor='type' className='login-label'>
            Username
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {type['type']}
          </div>

          <input
            className='field-input-login peer'
            type='firstname'
            required
            placeholder='firstname'
            onChange={(e) => setFirstName(e.target.value)}
            id='firstname'
          />
          <label htmlFor='firstname' className='login-label'>
            Username
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {first_name['firstname']}
          </div>

          <input
            className='field-input-login peer'
            type='lastname'
            required
            placeholder='lastname'
            onChange={(e) => setLastName(e.target.value)}
            id='lastname'
          />
          <label htmlFor='lastname' className='login-label'>
            Lastname
          </label>

          <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
            {last_name['lastname']}
          </div>

          <input
            type='submit'
            className='btn'
            value='Submit'
            onClick={handleSignIn}
          />
        </form>
      </div>
    </>
  );
};
