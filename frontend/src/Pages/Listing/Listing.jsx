import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchTool } from '../../Components/Searchtool/Searchtool';

export const ListingPage = () => {
  return (
    <>
      <div className='list-container flex justify-between'>
        <Link to='helpers/' className='helpers_list'>
          <button className='btn btn-blue'> Helpers</button>
        </Link>
        <Link to='jobs/' className='jobs_list'>
          <button className='btn btn-blue'>Open Jobs</button>
        </Link>
      </div>
      <SearchTool />
      <Outlet />
    </>
  );
};
