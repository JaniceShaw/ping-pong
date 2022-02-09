import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { signInAction } from '../../store/actions/login';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {postLoginData,} from '../../Hooks/DataFetching';

export const LoginPage = () => {

  // const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState({});

  // for react router to change page
  let navigate = useNavigate();
      const HomeLink = () => {
        navigate('/');
    }

  const handleSignIn = (event) => {
    event.preventDefault();

    postLoginData(
      'auth/',
      { email: email, password: password },
      setResponse
    );

    // if (localStorage.getItem('token')) {
    //         HomeLink();
    //     }

     HomeLink();
     // setEmail('')
     //  setPassword('')
  };

    // hook version - componentDidMount
    useEffect(() => {
        if (localStorage.getItem('token')) {
            HomeLink();
        }
    });



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
            className='btn'
            value='Login'
            onClick={handleSignIn}
          />
        <div className="text-sm text-red-500 h-8 mt-4" id="passwordHelp">{response['detail']}</div>
        </form>
        <div className="mt-4">

        <Link to='/about' className='underline underline-offset-2'>What is Ping-Pong?</Link>
          </div>

      </div>
    </>
  );
};
