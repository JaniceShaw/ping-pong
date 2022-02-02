// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { GetUserToken, GetUserData } from '../../sharedFunctions/fetchAPI';
// import { signInAction } from '../../store/actions/login';
import { Link } from 'react-router-dom';
import './styles.scss'


export const LoginPage = () => {
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [user, setUser] = useState('');
  // // login errors
  // const [error, setError] = useState('');

  // for react router to change page
  // let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
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
    // setPassword(event.target.value);
  };

  const handleEmailInput = (event) => {
    // setEmail(event.target.value);
  };

  const handleUserCheckbox = () => {
    // setTypeOfUser(event.target.value);
  };
  return (
    <>
      <h1>Login Page</h1>
      <div className='loginForm'>
        <form action=''>
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
          <label>
            <input
              type='checkbox'
              className='user-checkbox'
              onChange={handleUserCheckbox}
            />
            I am a Member
          </label>
          <label>
            <input
              type='checkbox'
              className='user-checkbox'
              onChange={handleUserCheckbox}
            />
            I am a Helper
          </label>
        </form>
        <Link to='/about'>What is Ping-Pong?</Link>
        {/* <p>{error}</p> */}
      </div>
    </>
  );
};
