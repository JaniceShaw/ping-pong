import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const HelperProfilePage = () => {
  return (
    <>
      <h1>roberto_rodriguez</h1>
      <div className='section'>
        <Link to='jobs/'>Jobs</Link>
        <Link to='profile/'>Profile</Link>
      </div>
      <Outlet />
    </>
  );
};
