import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.scss';
import '../../Components/Hamburgers/hamburgers.scss';

export const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let navigate = useNavigate();

  const handleLogout = (event) => {
    // event.preventDefault();
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <div
        className='fixed z-50 right-4 top-4 uppercase'
        onClick={() => setShowMenu(!showMenu)}
      >
        <button
          class={`hamburger hamburger--spin ${showMenu ? 'is-active' : ''}`}
          type='button'
        >
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      </div>

      <div
        className={`bg-bg_light fixed z-40 w-full h-screen pt-32 p-4 transition-transform duration-300  shadow-lg ${
          !showMenu ? 'translate-x-full' : ''
        }`}
      >
        <ul
          className='text-4xl text-center flex flex-col h-4/5  justify-between'
          onClick={() => setTimeout(() => setShowMenu(!showMenu), 200)}
        >
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link className='menu-item' to='/registration'>
              Registration
            </Link>
          </li>

          <li>
            <Link className='menu-item' to='/login'>
              Login
            </Link>
          </li>

          <li>
            <Link className='menu-item' onClick={handleLogout} to='/'>
              Log out
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/create-user'>
              Create User
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/listing'>
              Listing
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/view-job'>
              Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/new-job'>
              New Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/private-job'>
              Private Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/helper-profile'>
              Helper-Profile
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/member-profile'>
              Member-Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* <Menu
        isOpen={false}
        right
        width={'100vw'}
        className='pt-20 bg-transparent menu'
      >
    
        <a className='menu-item' href='/registration'>
          Registration
        </a>
        <a className='menu-item' href='/login'>
          Login
        </a>
        <span onClick={handleLogout}>
          <a className='menu-item' href='/'>
            Log out
          </a>
        </span>
        <a className='menu-item' href='/create-user'>
          Create User
        </a>
        <a className='menu-item' href='/listing'>
          Listing
        </a>
        <a className='menu-item' href='/view-job'>
          Job
        </a>
        <a className='menu-item' href='/new-job'>
          New Job
        </a>
        <a className='menu-item' href='/private-job'>
          Private Job
        </a>
        <a className='menu-item' href='/helper-profile'>
          Helper-Profile
        </a>
        <a className='menu-item' href='/member-profile'>
          Member-Profile
        </a>
      </Menu> */}
    </>
  );
};
