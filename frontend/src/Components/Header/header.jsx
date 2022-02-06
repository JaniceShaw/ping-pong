import Logo from '../../Assets/icons/Logo.png';

export const Header = () => {
  return (
    <div className=" flex flex-col justify-start items-start">
      <img src={Logo} alt="here should be the logo" />
    </div>
  );
};
