import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const HelperProfilePage = () => {
  return (
    <>
      <div className='section flex justify-evenly '>
        <Link to='jobs/' className='w-1/2'>
          <button className='border-2 border-black w-full'>Jobs</button>
        </Link>

        <Link to='info/' className='w-1/2'>
          {' '}
          <button className='border-2 border-black w-full'>Profile</button>
        </Link>
      </div>

      <h1>roberto_rodriguez</h1>
      <Outlet />
    </>
  );
};
