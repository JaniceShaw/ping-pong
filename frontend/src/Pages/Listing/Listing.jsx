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
        <Link to='requests/' className='requests_list'>
          <button className='btn btn-blue'>Help Requests</button>
        </Link>
      </div>
      <SearchTool />
      <Outlet />
    </>
  );
};
