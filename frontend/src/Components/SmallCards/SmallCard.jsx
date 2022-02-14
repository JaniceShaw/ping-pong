import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const Smallcard = (props) => {
  const [job, setJobData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setJobData(props.job);
  }, [props.job]);

  return (
    <>
      <Link
        to='/job'
        className=' flex flex-col
         border-2 border-black justify-center items-center'>
        <h2>
          <b>{job?.title}</b>
        </h2>
        <div className='lower-box flex'>
          <p>{job?.description}</p>
          <img src={RatingBalls} alt='here should be the rating balls' />
        </div>
      </Link>
    </>
  );
};
