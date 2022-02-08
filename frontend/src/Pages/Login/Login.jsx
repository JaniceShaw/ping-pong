import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { GetUserToken, GetUserData } from '../../sharedFunctions/fetchAPI';
// import { signInAction } from '../../store/actions/login';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {postData,} from '../../Hooks/DataFetching';

export const LoginPage = () => {

  const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const GetUserToken = (email, password, errorMessage) => {
    axios
      .post(`${APIurlPrefix}auth/`, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          console.log(response);
          return errorMessage(response.statusText);
        }
      })
      .then((data) => {
        if (data.access) {
          localStorage.setItem('token', data.access);
          // GetUserData();
          return data;
        }
      })
      .catch((error) => {
        // console.log('in error', error);
      });
  };
  
  // const [user, setUser] = useState('');
  // // login errors

  const [response, setResponse] = useState({});

  // for react router to change page
  // let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();

    postData(
      'auth/',
      { email: email, password: password },
      setResponse
    );

    // GetUserToken(email, password, setError);

    GetUserToken(email, password, setError);

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
  };
    console.log(response)
  return (
    <>

      <div className='loginForm w-full max-w-sm  text-center m-auto'>
        <h1 className="text-lg pb-6 font-bold">Login Page</h1>
        <form action='' className='flex justify-center flex-col'>

          <div className="pb-4">
           <input
              className='field-input'
              type='email'
              required
              placeholder='e-Mail'
              onChange={handleEmailInput}
            />
            <div className="text-xs text-red-500 h-2" id="emailHelp">{response['email']}</div>
          </div>

        <div className="pb-4">
          <input
            className='field-input'
            type='password'
            placeholder='password'
            onChange={handlePasswordInput}
          />
          <div className="text-xs text-red-500 h-2" id="passwordHelp">{response['password']}</div>
        </div>

          <input
            type='submit'
            className='field-submit'
            value='Login'
            onClick={handleSignIn}
          />
<div className="text-sm text-red-500 h-8 mt-4" id="passwordHelp">{response['detail']}</div>
        </form>
        <div className="mt-4">


        <Link to='/about'>What is Ping-Pong?</Link>
          </div>
        {/* <p>{error}</p> */}
      </div>
    </>
  );
};
