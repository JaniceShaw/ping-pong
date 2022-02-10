import Logo from '../../Assets/icons/Logo.png';
import { MenuBar } from '../../Pages/Menu/Menu';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div
        id='outer-container'
        className='flex justify-between items-center p-4 h-24 shadow-md fixed bg-white w-full z-50'
      >
        <Link to='/'>
          <img src={Logo} alt='here should be the logo' />
        </Link>
      </div>
      <MenuBar />
    </>
  );
};
