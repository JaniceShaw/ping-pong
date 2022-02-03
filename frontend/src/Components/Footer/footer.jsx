import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <ul className='text-gray-300'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <Link to='registration'>Registration</Link>
        </li>
        <li>
          <Link to='profile'>Profile</Link>
        </li>
        <li>
          <Link to='listing'>Listing</Link>
        </li>
      </ul>
    </footer>
  );
};
