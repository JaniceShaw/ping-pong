import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <>
      <h1 className='text-2xl mt-4 mb-4 font-bold'>What is ping pong?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        expedita dolorum accusamus debitis repellendus laboriosam, libero
        recusandae neque corrupti et.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        expedita dolorum accusamus debitis repellendus laboriosam, libero
        recusandae neque corrupti et.
      </p>
      <Link to='/'><p>Return to Start</p></Link>
      <p><Link to='/registration'>Register</Link> or <Link to='/login'>Login</Link></p>
    </>
  );
};
