import React from 'react';
import { Link } from 'react-router-dom';

export const FAQPage = () => {
  return (
    <>
        <h1 className='text-2xl mt-4 mb-4 font-bold'>Frequently Asked Questions</h1>
        <br/>
        <p className='font-bold'>Question 1:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
        <p className='font-bold'>Question 2:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 3:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 4:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 5:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 6:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 7:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 8:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 9:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
         <p className='font-bold'>Question 10:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <br/>
        <h2 className='text-xl mt-4 mb-4 font-bold'>Any other questions?</h2>

        <Link to='/support'>Contact Support</Link>
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
