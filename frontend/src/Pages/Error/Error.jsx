import ErrorImage from '../../Assets/UnDraw/undraw_cancel_re_ctke.svg';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <div className='flex-col flex justify-between h-full max-h-screen'>
        <h1 className=' font-bold text-red-500 text-3xl pt-8 uppercase text-center'>
          nothing to see here!
        </h1>
        <img src={ErrorImage} alt='error page' />
        <Link className='btn' to='/'>
          back to home
        </Link>
      </div>
    </>
  );
};
