import ProfilePlaceholder from '../../Assets/placeholder/profile_placeholder.png';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RatingCalculator } from '../../Helpers/RatingCalculator';
import { useEffect } from 'react';

export const HelperCard = (props) => {
  const helper = props.helper;
  const UserRating = RatingCalculator(helper.helper_reviews);

  useEffect(() => {}, [UserRating]);

  return (
    <>
      <Link
        to={`/helper/${helper.id}`}
        className='card_container justify-around border border-blue-800 p-2 rounded-md'
      >
        <div className='card-header mb-4'>
          <h1 className='font-bold'>{helper.username}</h1>

          {UserRating ? (
            <div className='flex'>
              {[...Array(UserRating)].map((x, i) => (
                <span key={i} className='rating-ball mr-1'></span>
              ))}
            </div>
          ) : (
            <p>not rated yet</p>
          )}
        </div>
        <div className='card-body grid grid-cols-2 gap-2 p-0'>
          <div className=''>
            <img
              src={helper.profile_pic ? helper.profile_pic : ProfilePlaceholder}
              alt={`profile pic ${helper.username}`}
              className='object-cover w-full h-40 rounded-md'
            />
          </div>
          <div className='info-box'>
            <ul>
              <li>
                📍 {helper.zip} {helper.city}
              </li>
              <li>
                💪{' '}
                {helper.helper_categories.map(
                  (category) => `${category.name}, `
                )}
              </li>
              <li>
                🎉 Helper since {moment(helper.date_joined).format('D MMM Y')}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};
