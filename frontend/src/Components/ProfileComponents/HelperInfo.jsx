import { Link } from 'react-router-dom';
import moment from 'moment';
import { RatingCalculator } from '../../Helpers/RatingCalculator';

export const HelperInfo = (props) => {
  let userRating = 0;

  const user = props.profileData;

  return (
    <>
      <div className='pt-5'>
        <h1 className='text-3xl capitalize font-bold font-primary'>
          {user.username}
        </h1>
        <div className='flex space-x-8 pb-5'>
          <h2 className='text-base text-primary'>
            Last seen: {moment(user.last_login).fromNow()}
          </h2>

          {user ? (
            <div className='flex'>
              {[...Array(userRating)].map((x, i) => (
                <span key={i} className='rating-ball mr-1'></span>
              ))}
            </div>
          ) : (
            <p>not rated yet</p>
          )}
        </div>

        <div className='quick_intro grid grid-cols-2 gap-3'>
          <img
            className='rounded-lg'
            src={user.profile_pic}
            alt='smilying at the camera'
          />
          <div>
            <p className='text-primary pb-2'>
              {user.zip}, {user.city}
            </p>
            <p className='text-primary hover:truncate max-h-80 overflow-hidden text-ellipsis'>
              {user.description}
            </p>
          </div>
        </div>
      </div>

      <div className='pt-4 grid grid-cols-2 gap-2'>
        <h1
          className={`text-center rounded-md font-semibold border
            ${
              user.helper_verified
                ? 'bg-primary text-secondary border border-secondary'
                : 'bg-bg_light text-primary border-primary '
            }`}
        >
          {user.helper_verified ? '✓ Verified' : '❔ Unverified'}
        </h1>

        <Link to='/job/private' className='flex'>
          <button className='border border-primary rounded-md bg-orange-400 w-full font-semibold'>
            Direct Request
          </button>
        </Link>
      </div>

      <div className='lower_container pt-10'>
        <div className='border-b-4 border-secondary'>
          <h1>
            <b className='text-2xl'>Skills</b>
          </h1>
        </div>

        <div className='skills-card pt-5 pb-5'>
          {user.helper_categories?.map((category, i) => {
            return (
              <div className='pb-3' key={i}>
                <h1 className='uppercase text-l font-semibold'>
                  {category.name}
                </h1>
                {category.sub_categories.map((subcategory, i2) => {
                  return (
                    <h2 className='text-sm pb-4' key={i2}>
                      {subcategory.name}
                    </h2>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  //}
};
