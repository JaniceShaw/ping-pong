import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Validation = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  // const [user, setUser] = useState('');
  // // login errors
  // const [error, setError] = useState('');

  // for react router to change page
  let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSignIn = (event) => {
    event.preventDefault();
    // GetUserToken(email, password, setError);
    // GetUserData(setUser, setError);
  };

  // useEffect(() => {
  //   // dispatch(
  //   //   signInAction({
  //   //     user: user.first_name,
  //   //     user_id: user.id,
  //   //   })
  //   // );
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

  const handleCodeInput = (event) => {
    setCode(event.target.value);
  };
  return (
    <>
      <h1>Thanks for registering!</h1>
      <br />
      <p>
        Please check your email for your verification code and login with it
        below.
      </p>
      <br />
      <div className='registerForm'>
        <form action=''>
          <input
            className='field-input'
            type='email'
            placeholder='Your E-Mail'
            value={email}
            onChange={handleEmailInput}
          />
          <input
            className='field-input'
            type='password'
            placeholder='Your Password'
            value={password}
            onChange={handlePasswordInput}
          />
          <input
            className='field-input'
            type='text'
            placeholder='E-Mail code'
            value={code}
            onChange={handleCodeInput}
          />
          <input
            type='submit'
            className='field-submit'
            value='Submit'
            onClick={handleSignIn}
          />
        </form>
      </div>
    </>
  );
};
