import Logo from '../../Assets/icons/Logo.png';
import { MenuBar } from '../../Pages/Menu/Menu';

export const Header = () => {
  return (
    <>
      <div
        id='outer-container'
        className='flex justify-between items-center p-4 h-24 shadow-md fixed bg-white w-full'
      >
        <img src={Logo} alt='here should be the logo' />
      </div>
      <MenuBar />
    </>
  );
};
