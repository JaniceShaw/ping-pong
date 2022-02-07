import React from 'react';
import { Link } from 'react-router-dom';

export const SupportPage = () => {
  return (
    <>
        <h1>Support</h1>

        <div>
            <h2>E-Mail:</h2>
            <p>support@ping-pong.ch</p>
        </div>
        <br/>
        <div>
            <h2>Phone:</h2>
            <p>+41 79 234 56 78</p>
        </div>
        <br/>
        <div>
            <h3>Working hours:</h3>
            <p>8:00 - 20:00 Weekdays, 8:00 - 14:00 Weekends</p>
        </div>
        <br/>
        <div>
            <h3>Office address:</h3>
            <p>Heinrichstrasse 200, 8005 Zürich</p>
        </div>
        <br/>
        <Link to='/'>Return to Start</Link>
        <div>
            <Link to='/register'>Register</Link>
            <p>or</p>
            <Link to='/login'>Login</Link>
        </div>
    </>
  );
};
