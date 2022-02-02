import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ListingPage = () => {
  return (
    <>
      <div className='list-container flex justify-center'>
        <Link to='helpers/' className='helpers_list'>
          <button className='btn btn-blue m-4'> Helpers</button>
        </Link>
        <Link to='requests/' className='requests_list'>
          <button className='btn btn-blue m-4'>Help Requests</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};
