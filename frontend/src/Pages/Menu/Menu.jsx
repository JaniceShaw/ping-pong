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
        onClick={() => setShowMenu(!showMenu)}>
        <button
          class={`hamburger hamburger--spin ${showMenu ? 'is-active' : ''}`}
          type='button'>
          <span class='hamburger-box'>
            <span class='hamburger-inner'></span>
          </span>
        </button>
      </div>

      <div
        className={`bg-bg_light fixed z-40 w-full h-screen pt-32 p-4 transition-transform duration-300  shadow-lg ${
          !showMenu ? 'translate-x-full' : ''
        }`}>
        <ul
          className='text-4xl text-center flex flex-col h-4/5  justify-between'
          onClick={() => setTimeout(() => setShowMenu(!showMenu), 200)}>
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
            <Link className='menu-item' to='/listing'>
              Listing
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/job'>
              Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/job/new'>
              New Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/job/private'>
              Private Job
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/helper'>
              Helper-Profile
            </Link>
          </li>
          <li>
            <Link className='menu-item' to='/member'>
              Member-Profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
