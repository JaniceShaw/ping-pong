import { slide as Menu } from 'react-burger-menu';
import './styles.scss';
// import MenuClosed from '../../assets/icons/menu.svg';
// import MenuOpen from '../../assets/icons/menu_open.svg';

export const MenuBar = () => {
  return (
    <>
      <Menu isOpen={false} right width={'100vw'}>
        <a className='/' href='/'>
          Home
        </a>
        <a className='menu-item' href='/registration'>
          Registration
        </a>
        <a className='menu-item' href='/login'>
          Login
        </a>
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
      </Menu>
    </>
  );
};
