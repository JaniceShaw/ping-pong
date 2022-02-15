import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
import moment from 'moment';
import { RatingCalculator } from '../../Helpers/RatingCalculator';

export const HelperInfo = (props) => {
  const [user, setUserData] = useState([]);
  const [error, setError] = useState(null);
  let userRating = 0;

  useEffect(() => {
    setUserData(props.profileData);
  }, [props.profileData]);

  if (user) {
    userRating = RatingCalculator(user.helper_reviews);

    return (
      <>
        <div className='upper_container pt-5'>
          <h1 className='text-4xl font-bold font-primary'>{user.username}</h1>
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
            <img className='rounded-lg' src={user.profile_pic} />
            <div>
              <p className='text-primary pb-2'>
                {user.zip}, {user.city}
              </p>
              <p className='text-primary hover:truncate max-h-80 overflow-hidden text-ellipsis'>
                {user.description}
              </p>
            </div>
          </div>

          {/* <div className='pt-3 pb-3 w-72'>
          <div className='languages w-1/2 flex justify-evenly'>
            <p>💬</p>
            <p>DE</p>
            <p>ENG</p>
            <p>IT</p>
          </div>
        </div> */}
        </div>

        <div className='middle_container pt-10 flex space-x-10 place-content-center justify-center'>
          <h1
            className={`pl-4 pr-4 rounded font-semibold border
            ${
              user.helper_verified
                ? 'bg-primary text-secondary border border-secondary'
                : 'bg-bg_light text-primary border-primary '
            }`}>
            {user.helper_verified ? 'Verified' : 'Unverified'}
          </h1>

          <Link to='/job/private' className='flex justify-end'>
            <button className='border border-black rounded bg-orange-400 pr-4 pl-4 font-semibold'>
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
  }
};
