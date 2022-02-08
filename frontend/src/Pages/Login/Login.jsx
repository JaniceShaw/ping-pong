import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { GetUserToken, GetUserData } from '../../sharedFunctions/fetchAPI';
// import { signInAction } from '../../store/actions/login';
import { Link } from 'react-router-dom';

import {postData,} from '../../Hooks/DataFetching';

export const LoginPage = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState('');
  // // login errors
  const [error, setError] = useState('');
  const [response, setResponse] = useState([]);

  // for react router to change page
  // let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
    postData(
      'auth/',
      { email: 'hello@janiceshaw.co.uk', password: 'password' },
      setResponse
    );
    console.log(response)
    // GetUserToken(email, password, setError);
    // GetUserData(setUser, setError);
  };

  // useEffect(() => {
  //   dispatch(
  //     signInAction({
  //       user: user.first_name,
  //       user_id: user.id,
  //     })
  //   );
  //   if (user.id) {
  //     navigate('/profile');
  //   }
  // }, []);

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    console.log(email)
  };

  return (
    <>

      <div className='loginForm w-full max-w-sm  text-center m-auto'>
        <h1 className="text-lg pb-6 font-bold">Login Page</h1>
        <form action='' className='flex justify-center flex-col'>

          <div className="pb-4">
           <input
              className='field-input'
              type='email'
              placeholder='e-Mail'
              onChange={handleEmailInput}
            />
            <span className="text-xs text-red-700" id="emailHelp">{error}</span>
          </div>

        <div className="pb-4">
          <input
            className='field-input'
            type='password'
            placeholder='password'
            onChange={handlePasswordInput}
          />
          <span className="text-xs text-red-700" id="passwordHelp">{error}</span>
        </div>

          <input
            type='submit'
            className='field-submit'
            value='Login'
            onClick={handleSignIn}
          />

        </form>
        <Link to='/about'>What is Ping-Pong?</Link>
        {/* <p>{error}</p> */}
      </div>
    </>
  );
};
