import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export const Register = () => {
  const options = [
    { value: '1', label: 'member' },
    { value: '2', label: 'helper' },
  ];
  const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';

  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const url = `${apiBaseURL}registration/`;
    const method = 'POST';
    const body = {
      email: email,
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
        if (response.status === 201) {
          return response.status;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log('user data', data);
        if (data === 201) {
          navigate(`/register/validation`);
        } else {
          setError(data.email[0]);
        }
      });
  };

  return (
    <>
      <h1 className='text-xl mt-3 pb-6 font-bold'>Sign Up</h1>
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

          <Select
            className='pb-9'
            options={options}
            onChange={(e) => setType(e.value)}
          />

          <input
            type='submit'
            className='btn'
            value='Register'
            onClick={handleSignUp}
          />
        </form>
        <p>{error}</p>
      </div>

      <Link to='/about'>
        <p>What is ping-pong?</p>
      </Link>
    </>
  );
};
