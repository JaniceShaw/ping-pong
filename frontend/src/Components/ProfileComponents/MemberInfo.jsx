import { useEffect } from 'react';
import { useState } from 'react';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const MemberInfo = (props) => {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    setUserData(props.profileData);
  }, [props.profileData]);

  return (
    <>
      <div className='upper_container'>
        <h1 className='text-4xl font-bold font-primary'>{user?.username}</h1>
        <div>
          <h2 className='text-xl text-primary'>
            Last seen: {user?.last_login}
          </h2>
          <img src={RatingBalls} alt='here should be the rating' />
        </div>

        <div className='quick_intro flex'>
          <img
            className='rounded-lg h-40'
            src={user?.profile_pic}
            alt='me smilying'
          />
          <div>
            <p className='text-primary pb-2'>
              {user?.zip}, {user?.city}
            </p>
            <p className='text-primary'>{user?.description}</p>
          </div>
        </div>

        <div className='flex w-72 justify-evenly'>
          <div className='languages w-1/2 flex justify-evenly'></div>
        </div>
      </div>
    </>
  );
};
