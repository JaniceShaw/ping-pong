import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { GetUserToken, GetUserData } from '../../sharedFunctions/fetchAPI';
// import { signInAction } from '../../store/actions/login';

export const LoginPage = () => {
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  // // login errors
  // const [error, setError] = useState('');

  // for react router to change page
  let navigate = useNavigate();

  // const dispatch = useDispatch();

  // const handleSignIn = (event) => {
  //   event.preventDefault();
  //   // GetUserToken(email, password, setError);
  //   // GetUserData(setUser, setError);
  // };

  useEffect(() => {
    // dispatch(
    //   signInAction({
    //     user: user.first_name,
    //     user_id: user.id,
    //   })
    // );
    if (user.id) {
      navigate('/profile');
    }
  }, []);

  // const handlePasswordInput = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleEmailInput = (event) => {
  //   setEmail(event.target.value);
  // };

  return (
    <>
      <main>
        {/* <div className="loginForm">
          <form action="">
            <input
              type="email"
              placeholder="e-Mail"
              onChange={handleEmailInput}
            />
            <input
              type="password"
              placeholder="password"
              onChange={handlePasswordInput}
            />
            <input type="submit" value="Login" onClick={handleSignIn} />
          </form>
          <p>{error}</p>
        </div> */}
        <h1>Login Page</h1>
      </main>
    </>
  );
};
