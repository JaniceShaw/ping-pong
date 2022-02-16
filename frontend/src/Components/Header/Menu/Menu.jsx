import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../../../Hooks/DataFetching';
import ProfilePlaceholder from '../../../Assets/placeholder/profile_placeholder.png';

export const MenuBar = (props) => {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem('userData')) || '';

  const handleLogout = () => {
    navigate('/');
    logoutUser();
    props.showMenuHandler(!props.menuIsOpen);
  };

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <>
      <nav
        className={`bg-gray-100 fixed z-40 w-full h-screen pt-24 px-4 transition-transform duration-300  shadow-lg ${
          !props.menuIsOpen ? 'translate-x-full' : ''
        }`}
      >
        {loggedIn ? (
          <>
            <div className='flex items-center border-b border-primary mb-8 pb-4'>
              <img
                src={user.profile_pic || ProfilePlaceholder}
                className='w-16 h-16 mr-4 object-cover rounded-full'
                alt=''
              />
              <div>
                <p className='font-bold'>Logged in as {user.username}</p>
                <Link
                  className='underline-offset-2 underline mr-2'
                  to='/profile'
                  onClick={() => props.showMenuHandler(false)}
                >
                  Profile
                </Link>
                <Link
                  className='underline-offset-2 underline'
                  onClick={handleLogout}
                  to='/'
                >
                  Log out
                </Link>
              </div>
            </div>
          </>
        ) : (
          ''
        )}

        <ul
          className='text-2xl font-bold grid grid-cols-1 gap-6 '
          onClick={() =>
            setTimeout(() => props.showMenuHandler(!props.menuIsOpen), 200)
          }
        >
          {!loggedIn ? (
            <>
              <li>
                <Link className='menu-item' to='/login'>
                  Login
                </Link>{' '}
                or{' '}
                <Link className='menu-item' to='/register'>
                  Register
                </Link>
              </li>
            </>
          ) : (
            ''
          )}
          <li>
            <Link className='menu-item' to='/listing'>
              📜 Listing
            </Link>
            <ul className='ml-6'>
              <li>
                <Link className='menu-item' to='/listing/jobs'>
                  💪 Jobs
                </Link>
              </li>
              <li>
                <Link className='menu-item' to='/listing/helpers'>
                  🙋‍♀️ Helpers
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className='menu-item' to='/job/new'>
              ✐ Create Job Request
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/about'>
              💡 About
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/faq'>
              ❓ FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
