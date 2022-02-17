import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export const ListingPage = () => {
  const location = useLocation();

  return (
    <div className='absolute left-0'>
      <div className='list-container flex w-screen border-b -mx-4 border-primary bg-white z-30 relative'>
        <Link
          to='jobs/'
          className='jobs_list w-full text-center border-r border-blue-900'
        >
          <button
            className={`w-full p-1 ${
              location.pathname.includes('job') ? 'bg-secondary' : ''
            }`}
          >
            Open Jobs
          </button>
        </Link>
        <Link to='helpers/' className={`helpers_list w-full text-center `}>
          <button
            className={`w-full p-1 hover:bg-secondary ${
              location.pathname.includes('helper') ? 'bg-secondary' : ''
            }`}
          >
            Helpers
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
