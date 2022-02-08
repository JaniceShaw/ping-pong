import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const MemberProfilePage = () => {
  const [btnColor, setBtnColor] = useState('white');
  const [InfoBtn, setInfoBtn] = useState('white');

  return (
    <>
      <div className='section flex justify-evenly '>
        <Link to='jobs/' className='w-1/2'>
          <button
            value={InfoBtn}
            onClick={() => {
              InfoBtn === 'white'
                ? setInfoBtn('orange') && setBtnColor('white')
                : setInfoBtn('white');
            }}
            style={{ backgroundColor: btnColor }}
            className='border-2 border-black w-full'>
            Jobs
          </button>
        </Link>

        <Link to='info/' className='w-1/2'>
          {' '}
          <button
            value={btnColor}
            onClick={() => {
              btnColor === 'white'
                ? setBtnColor('orange') && setInfoBtn('white')
                : setBtnColor('white');
            }}
            style={{ backgroundColor: btnColor }}
            className='border-2 border-black w-full'>
            Profile
          </button>
        </Link>
      </div>

      <h1>anemarie</h1>

      <Outlet />
    </>
  );
};
