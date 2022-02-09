import React from 'react';
import { Link } from 'react-router-dom';
import StudentsPicture from '../../Assets/UnDraw/students_undraw.png';

export const StartPage = () => {
  return (
    <div className='Start w-full max-w-sm  text-center m-auto'>
        <h2 className='font-bold text-2xl mb-7 mt-3'>Where students and apprentices help you with anything.</h2>
        <img src={StudentsPicture} alt="here should be a Students drawing" className='mb-7' />

        <button className='btn block m-auto mb-7 min-w-full'>
            <Link to="/search">I need help </Link>
        </button>

        <button className='btn block m-auto mb-7 min-w-full'>
            <Link to="/listing/jobs">I want to help</Link>
        </button>


      <div className="loginButton mb-6">
        <p>Have an account?</p>
          <Link to="/login" className='underline underline-offset-2'>Log in</Link> or <Link to="/login" className='underline underline-offset-2'>Register</Link>
      </div>


      <Link to="/about" className='underline underline-offset-2'>
        <p>What is ping-pong?</p>
      </Link>


    </div>
  );
};
