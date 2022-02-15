import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../../../Hooks/DataFetching';

export const MenuBar = (props) => {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem('userData'));

  const handleLogout = () => {
    logoutUser();
    navigate('/');
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
        className={`bg-bg_light fixed z-40 w-full h-screen pt-32 p-4 transition-transform duration-300  shadow-lg ${
          !props.menuIsOpen ? 'translate-x-full' : ''
        }`}
      >
        {loggedIn ? (
          <>
            <div className='flex items-center border-b border-primary_light mb-8 pb-4'>
              <img
                src={user.profile_pic}
                className='w-16 h-16 mr-4 object-cover rounded-full'
                alt=''
              />
              <div>
                <p className='font-bold'>Logged in as {user.username}</p>
                <Link
                  className='underline-offset-2 underline mr-2'
                  to='/helper/me'
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
            <Link className='menu-item' to='/helper/me'>
              👤 My Helper-Profile
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/member/me'>
              👤 My Member-Profile
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
          {loggedIn ? (
            <>
              {/* <li>
                <Link className='menu-item' onClick={handleLogout} to='/'>
                  🏃‍♀️ Log out
                </Link>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <Link className='menu-item' to='/login'>
                  Login
                </Link>
              </li>
              <li>
                <Link className='menu-item' to='/register'>
                  Register
                </Link>
              </li>
            </>
          )}
          {/* <li>
            <Link className='menu-item' to='/job'>
              Job
            </Link>
          </li> */}
          {/* <li>
            <Link className='menu-item' to='/job/private'>
              Private Job
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
