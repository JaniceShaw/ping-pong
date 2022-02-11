import Logo from '../../Assets/icons/Logo.png';
import { MenuBar } from './Menu/Menu';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div
        id='outer-container'
        className='flex justify-between items-center px-4 h-20 shadow-md fixed bg-white w-full z-50'
      >
        <Link className='h-full py-2' to='/'>
          <img
            className='object-contain h-full'
            src={Logo}
            alt='ping pong logo'
          />
        </Link>
      </div>
      <MenuBar />
    </>
  );
};
