import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { GetUserToken, GetUserData } from '../../sharedFunctions/fetchAPI';
// import { signInAction } from '../../store/actions/login';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
  // const [error, setError] = useState('');

  // for react router to change page
  // let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
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

  return (
    <>
      <h1>Login Page</h1>
      <div className='loginForm'>
        <form action='' className='flex justify-center flex-col'>
          <input
            className='field-input'
            type='email'
            placeholder='e-Mail'
            onChange={handleEmailInput}
          />
          <input
            className='field-input'
            type='password'
            placeholder='password'
            onChange={handlePasswordInput}
          />
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
