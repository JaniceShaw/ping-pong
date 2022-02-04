import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const RegisterHelper = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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

    return (
      <>
        <h1>Register as Helper</h1>
        <br/>
        <div className="registerForm">
          <form action="">
            <input
              className="field-input"
              type="email"
              placeholder="e-Mail"
              value={ email }
              onChange={handleEmailInput}
            />
            <input
              className="field-input"
              type="password"
              placeholder="password"
              value={ password }
              onChange={handlePasswordInput}
            />
            <input
              type="submit"
              className="field-submit"
              value="Register"
              onClick={handleSignIn}
            />
          </form>
        </div>

        <Link to='/about'>
          <p>What is ping-pong?</p>
        </Link>


      </>
    );
  };
  