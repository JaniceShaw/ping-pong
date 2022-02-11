import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentsPicture from '../../Assets/UnDraw/students_undraw.png';

export const StartPage = () => {
  const [logedIn, setLogedIn] = useState(false);

  let navigate = useNavigate();
  const HomeLink = () => {
    navigate('/');
  };

  const handleLogout = (event) => {
    localStorage.clear();
    setLogedIn(false);
    HomeLink();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogedIn(true);
    }
  }, [setLogedIn]);

  console.log(logedIn);
  return (
    <div className='Start w-full max-w-sm  text-center m-auto'>
      <h2 className='font-bold text-2xl mb-7 mt-3'>
        Where students and apprentices help you with anything.
      </h2>
      <img
        src={StudentsPicture}
        alt='here should be a Students drawing'
        className='mb-7'
      />

      <Link to='/listing/helpers'>
        <button className='btn block m-auto mb-7 min-w-full'>
          I need help
        </button>
      </Link>

      <Link to='/listing/jobs'>
        <button className='btn block m-auto mb-7 min-w-full'>
          I want to help
        </button>
      </Link>

      <div className='loginButton mb-6'>
        {logedIn ? (
          <Link
            to='/'
            className='underline underline-offset-2'
            onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <span>
            <p>Have an account?</p>
            <Link to='/login' className='underline underline-offset-2'>
              Log in
            </Link>{' '}
            or{' '}
            <Link to='/login' className='underline underline-offset-2'>
              Register
            </Link>
          </span>
        )}
      </div>

      <Link to='/about' className='underline underline-offset-2'>
        <p>What is ping-pong?</p>
      </Link>
    </div>
  );
};
