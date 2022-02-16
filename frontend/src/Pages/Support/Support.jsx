import React from 'react';
import { Link } from 'react-router-dom';

export const SupportPage = () => {
  return (
    <>
        <h1 className='text-2xl mt-4 mb-4 font-bold'>Support</h1>

        <div>
            <h2 className='font-bold'>E-Mail:</h2>
            <p>support@ping-pong.ch</p>
        </div>
        <br/>
        <div>
            <h2 className='font-bold'>Phone:</h2>
            <p>+41 79 234 56 78</p>
        </div>
        <br/>
        <div>
            <h3 className='font-bold'>Working hours:</h3>
            <p>8:00 - 20:00 Weekdays, 8:00 - 14:00 Weekends</p>
        </div>
        <br/>
        <div>
            <h3 className='font-bold'>Office address:</h3>
            <p>Heinrichstrasse 200, 8005 Zürich</p>
        </div>
        <br/>
        <Link to='/'>Return to Start</Link>
        <div>
            <p><Link to='/register'>Register</Link> or <Link to='/login'>Login</Link></p>
        </div>
    </>
  );
};
