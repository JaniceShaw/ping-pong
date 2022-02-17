import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Register = () => {
  const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  // const [type, setType] = useState(1);

  let navigate = useNavigate();

  // const handlesetType =(event)=>{
  //   setType(event)
  // }

  // console.log('type', type)

  const handleSignUp = (event) => {
    event.preventDefault();
    const url = `${apiBaseURL}registration/`;
    const method = 'POST';
    const body = {
      email: email,
      // type: type,
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
          console.log('here in error ', data.email[0])
        }
      });
  };

  return (
    <>
      <div className='loginForm w-full max-w-sm text-center m-auto'>
         <h1 className='text-xl mt-3 pb-6 font-bold mb-4'>Registration</h1>

        <form className='mb-10'>

          {/* Type radios */}
        {/*<div className='mb-7'>*/}
        {/*  <p className='text-left text-gray-600 font-semibold'>Type of user:</p>*/}

        {/*  <div className='form-control inline-block w-1/2'>*/}
        {/*    <label className='cursor-pointer label justify-start text-lg'>*/}
        {/*      <span className='pr-1'> Member</span>*/}
        {/*      <input type='radio' name='urgency' className='radio radio-primary' value='1'*/}
        {/*        onChange={(e) => handlesetType(e.target.value)}*/}
        {/*      />*/}
        {/*    </label>*/}
        {/*  </div>*/}

        {/*  <div className='form-control inline-block w-1/2'>*/}
        {/*    <label className='cursor-pointer label justify-start'>*/}
        {/*      <span className='pr-1 '>Helper</span>*/}
        {/*      <input*/}
        {/*        type='radio'*/}
        {/*        name='urgency'*/}
        {/*        className='radio radio-primary'*/}
        {/*        value='2'*/}
        {/*        onChange={(e) => handlesetType(e.target.value)}*/}
        {/*      />*/}
        {/*    </label>*/}
        {/*  </div>*/}

        {/*</div>*/}




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
              {error}
            </div>
          </div>

          <input
            type='submit'
            className='btn'
            value='Register'
            onClick={handleSignUp}
          />
        </form>
              <Link to='/about'>
        <p>What is ping-pong?</p>
      </Link>

      </div>


    </>
  );
};
