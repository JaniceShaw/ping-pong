import React from 'react';
import { Link } from 'react-router-dom';
import StudentsPicture from '../../assets/UnDraw/students_undraw.png';

export const StartPage = () => {
  return (
    <>
      <div>
        <Link to='/search'>
          <button>
            <span>I need help</span>
          </button>
        </Link>
      </div>
      <div>
        <Link to='/listing/jobs'>
          <button>
            <span>I want to help</span>
          </button>
        </Link>
      </div>

      <div className='loginButton'>
        <p>Have an account?</p>
        <Link to='/login'>
          <span>Log in</span>
        </Link>
      </div>

      <Link to='/about'>
        <p>What is ping-pong?</p>
      </Link>

      <img src={StudentsPicture} alt='here should be a Students drawing' />
    </>
  );
};
