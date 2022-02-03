import React from 'react';
import { Link } from 'react-router-dom';

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
      
    </>
  );
};
