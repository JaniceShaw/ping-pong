import Logo from '../../assets/icons/Logo.png';
import { MenuBar } from '../../Pages/Menu/Menu';

export const Header = () => {
  return (
    <>
      <div id="outer-container" className=" flex justify-between items-center">
        <img src={Logo} alt="here should be the logo" />
      </div>
      <MenuBar />
    </>
  );
};
