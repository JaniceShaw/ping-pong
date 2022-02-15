import moment from 'moment';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const MemberInfo = (props) => {
  const user = props.profileData;

  return (
    <>
      <div className='upper_container pt-5'>
        <h1 className='text-4xl font-bold font-primary'>{user.username}</h1>
        <div className='flex space-x-8 pb-5'>
          <h2 className='text-base text-primary'>
            Last seen: {moment(user.last_login).format('DD/MM/YYYY')}
          </h2>
          {user.member_reviews?.map((review, i) => {
            return (
              <div className='pb-3' key={i}>
                <h1 className='uppercase text-lg font-semibold'>
                  {review.rating}
                </h1>
              </div>
            );
          })}
        </div>

        <div className='quick_intro grid grid-cols-2 gap-3 pb-10'>
          <img
            className='rounded-lg'
            src={user.profile_pic}
            alt='smilying into the camera'
          />
          <div className=''>
            <p className='text-primary pb-2'>
              {user.zip}, {user.city}
            </p>
            <p className='text-primary '>{user.description}</p>
          </div>
        </div>

        <div className='flex w-72 justify-evenly'>
          <div className='languages w-1/2 flex justify-evenly'></div>
        </div>
      </div>
    </>
  );
};
