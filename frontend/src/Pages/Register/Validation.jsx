import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {patchData, patchValData} from '../../Hooks/DataFetching';

export const Validation = (props) => {

  const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';

  const [password, setPassword] = useState('');
  const [password_repeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [type, setType] = useState(1);
  const [error, setError] = useState('');



  let navigate = useNavigate();
    const loginLink = () => {
    navigate('/login');
  };

      console.log('error', error)
  if(error === 200 || error === 201){
    loginLink()
  }

  const handleValidation = (event) => {
    event.preventDefault();


        const body = {
          type: type,
          email: email,
          username: username,
          password: password,
          password_repeat: password_repeat,
          code: code,
          first_name: first_name,
          last_name: last_name,
    };

    patchValData('registration/validation/', body, setError);



    // const url = `${apiBaseURL}registration/validation/`;
    // const method = 'PATCH';
    // const body = {
    //   email: email,
    //   username: username,
    //   password: password,
    //   password_repeat: password_repeat,
    //   code: code,
    //   first_name: first_name,
    //   last_name: last_name,
    // };
    //
    // const headers = new Headers({
    //   'Content-type': 'application/json',
    // });
    // const config = {
    //   method: method,
    //   body: JSON.stringify(body),
    //   headers: headers,
    // };
    //
    // fetch(url, config)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       return response.status;
    //     } else {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     console.log('user data', data);
    //     if (data === 200) {
    //       navigate('/login');
    //     } else {
    //       setError(JSON.stringify(data).split('":["'));
    //     }
    //   });
  };

  return (
    <div className='m-auto max-w-md'>
      <h1 className='text-xl mt-4 pb-6 font-bold'>Thank you for registering!</h1>
      <p className=' mt-3 pb-6'>
        Please check your email for your <strong>verification code</strong>.
      </p>

      <div className='loginForm w-full text-center m-auto'>

        <form className='flex justify-center flex-col mt-5'>


                    {/* Type radios */}
        <div className='mb-7'>
          <p className='text-left text-gray-600 font-semibold'>Type of user:</p>

          <div className='form-control inline-block w-1/2'>
            <label className='cursor-pointer label justify-start text-lg'>
              <span className='pr-1'> Member</span>
              <input type='radio' name='urgency' className='radio radio-primary' value='1'
                onChange={(e) => setType(e.target.value)}
              />
            </label>
          </div>

          <div className='form-control inline-block w-1/2'>
            <label className='cursor-pointer label justify-start'>
              <span className='pr-1 '>Helper</span>
              <input
                type='radio'
                name='urgency'
                className='radio radio-primary'
                value='2'
                onChange={(e) => setType(e.target.value)}
              />
            </label>
          </div>

        </div>



          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='email'
              required
              placeholder='Email address'
              onChange={(e) => setEmail(e.target.value)}
              id='email'
            />
            <label htmlFor='email' className='login-label'>
              Email address
            </label>
            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {error['email']}
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
              {error['username']}
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
              {error['password']}
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
              {error['password_repeat']}
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
              {error['code']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='firstname'
              required
              placeholder='first name'
              onChange={(e) => setFirstName(e.target.value)}
              id='firstname'
            />
            <label htmlFor='firstname' className='login-label'>
              First name
            </label>

            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {error['first_name']}
            </div>
          </div>

          <div className='pb-9 relative'>
            <input
              className='field-input-login peer'
              type='lastname'
              required
              placeholder='last name'
              onChange={(e) => setLastName(e.target.value)}
              id='lastname'
            />
            <label htmlFor='lastname' className='login-label'>
              Last name
            </label>

            <div className='text-xs text-red-500 h-3 text-left' id='emailHelp'>
              {error['last_name']}
            </div>
          </div>

          <p className='text-red-600 mb-4'>{error.non_field_errors}</p>

          <input
            type='submit'
            className='btn mb-5'
            value='Submit'
            onClick={handleValidation}
          />
        </form>

      </div>
    </div>
  );
};
