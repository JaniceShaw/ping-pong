import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const Smallcard = (props) => {
  const [user, setUserData] = useState('');
  const [job, setJobData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setUserData(props.profileData);
  }, [props.profileData]);

  console.log(props.user);

  return (
    <>
      <Link
        to='/job'
        className=' flex flex-col
         border-2 border-black justify-center items-center'>
        <h2>
          <b>{user?.title}</b>
        </h2>
        <div className='lower-box flex'>
          <p>{job?.description}</p>
          <img src={job?.member_review} alt='here should be the rating balls' />
        </div>
      </Link>
    </>
  );
};
