import { useNavigate, Link } from 'react-router-dom';
import { logoutUser } from '../../../Hooks/DataFetching';

export const MenuBar = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <>
      <nav
        className={`bg-bg_light fixed z-40 w-full h-screen pt-32 p-4 transition-transform duration-300  shadow-lg ${
          !props.menuIsOpen ? 'translate-x-full' : ''
        }`}
      >
        <ul
          className='text-4xl text-center flex flex-col h-4/5  justify-between'
          onClick={() =>
            setTimeout(() => props.showMenuHandler(!props.menuIsOpen), 200)
          }
        >
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link className='menu-item' to='/register'>
              Register
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
      </nav>
    </>
  );
};
