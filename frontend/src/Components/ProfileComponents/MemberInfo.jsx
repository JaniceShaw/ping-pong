import moment from 'moment';
import { RatingCalculator } from '../../Helpers/RatingCalculator';
import profilePlaceHolder from '../../Assets/placeholder/profile_placeholder.png';

export const MemberInfo = (props) => {
  const user = props.profileData;
  const userRating = RatingCalculator(user.member_reviews);

  return (
    <>
      <div className='upper_container pt-5'>
        <h1 className='text-2xl capitalize font-bold font-primary'>
          {user.username}
        </h1>
        <div className='flex space-x-8 pb-5'>
          <h2 className='text-base text-primary'>
            Last seen: {moment(user.last_login).fromNow()}
          </h2>
          <div>
            {userRating ? (
              [...Array(5)].map((rate, i) =>
                i >= userRating ? (
                  <span key={i} className='rating-big-gray-ball' />
                ) : (
                  <span key={i} className='rating-big-ball'></span>
                )
              )
            ) : (
              <p>not rated yet</p>
            )}
          </div>
        </div>

        <div className='quick_intro grid grid-cols-2 gap-3 pb-10'>
          <img
            className='rounded-lg'
            src={user.profile_pic || profilePlaceHolder}
            alt='smilying into the camera'
          />
          <div className=''>
            <p className='text-primary pb-2'>
              {user.zip}, {user.city}
            </p>
            <p className='text-primary '>{user.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
