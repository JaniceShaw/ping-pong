import React from 'react';
import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { SearchTool } from '../../Components/Searchtool/Searchtool';
import { MapPage } from '../../Components/ListingFilter/ListingFilter';

export const ListingPage = () => {
  const location = useLocation();

  useEffect(() => {});

  return (
    <>
      <div className='list-container flex w-screen border-b -mx-4 border-blue-900 '>
        <Link to='helpers/' className={`helpers_list w-full text-center `}>
          <button
            className={`w-full p-1 hover:bg-orange-400 ${
              location.pathname.includes('helper') ? 'bg-orange-400' : ''
            }`}
          >
            Helpers
          </button>
        </Link>
        <Link
          to='jobs/'
          className='jobs_list w-full text-center border-l border-blue-900'
        >
          <button
            className={`w-full p-1 ${
              location.pathname.includes('job') ? 'bg-orange-400' : ''
            }`}
          >
            Open Jobs
          </button>
        </Link>
      </div>
      {/* <SearchTool /> */}
      <Outlet />
    </>
  );
};
