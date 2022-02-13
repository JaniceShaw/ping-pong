import Logo from '../../Assets/icons/Logo.png';
import { MenuBar } from './Menu/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Menu/Hamburgers/hamburgers.scss';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header
        id='outer-container'
        className='flex justify-between items-center px-4 h-20 shadow-sm fixed bg-white w-full border-b border-primary z-50'
      >
        <Link className='h-full py-2' to='/'>
          <img
            className='object-contain h-full'
            src={Logo}
            alt='ping pong logo'
          />
        </Link>
        <div
          className='fixed z-50 right-4 top-4 uppercase'
          onClick={() => setShowMenu(!showMenu)}
        >
          <button
            className={`hamburger hamburger--spin ${
              showMenu ? 'is-active' : ''
            }`}
            type='button'
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </div>
      </header>
      <MenuBar menuIsOpen={showMenu} showMenuHandler={setShowMenu} />
    </>
  );
};
