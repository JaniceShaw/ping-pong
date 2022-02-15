import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

export const Validation = (props) => {
  const options = [
    { value: '1', label: 'member' },
    { value: '2', label: 'helper' },
  ];

  const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';

  const [password, setPassword] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('');

  let navigate = useNavigate();

  const handleValidation = (event) => {
    event.preventDefault();
    const url = `${apiBaseURL}registration/validation/`;
    const method = 'PATCH';
    const body = {
      email: email,
      username: username,
      password: password,
      password_repeat: password_repeat,
      code: code,
      first_name: first_name,
      last_name: last_name,
      type: type,
    };
    const headers = new Headers({
      'Content-type': 'application/json',
    });
    const config = {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    };

    fetch(url, config)
      .then((response) => {
        if (response.status === 200) {
          return response.status;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log('user data', data);
        if (data === 200) {
          navigate('/login');
        } else {
          setError(JSON.stringify(data).split('":["'));
        }
      });
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
          <div className='pb-9 relative'>
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
          </div>

          <div className='pb-9 relative'>
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
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='password'
              required
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              id='password'
            />
            <label htmlFor='password' className='login-label'>
              Password
            </label>
            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {password['password']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='password'
              required
              placeholder='password_repeat'
              onChange={(e) => setPasswordRepeat(e.target.value)}
              id='password_repeat'
            />
            <label htmlFor='password_repeat' className='login-label'>
              Password Repeat
            </label>
            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {password_repeat['password_repeat']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='code'
              required
              placeholder='code'
              onChange={(e) => setCode(e.target.value)}
              id='code'
            />
            <label htmlFor='code' className='login-label'>
              Code
            </label>
            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {code['code']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='firstname'
              required
              placeholder='firstname'
              onChange={(e) => setFirstName(e.target.value)}
              id='firstname'
            />
            <label htmlFor='firstname' className='login-label'>
              Firstname
            </label>

            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {first_name['firstname']}
            </div>
          </div>

          <div className='pb-9 relative'>
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
          </div>
          <Select
            className='pb-9'
            options={options}
            onChange={(e) => setType(e.value)}
          />
          <input
            type='submit'
            className='btn'
            value='Submit'
            onClick={handleValidation}
          />
        </form>
        <p className='text-red-600'>{error}</p>
      </div>
    </>
  );
};
