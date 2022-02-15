import ProfilePlaceholder from '../../Assets/placeholder/profile_placeholder.png';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RatingCalculator } from '../../Helpers/RatingCalculator';
import './style.scss';

export const HelperCard = (props) => {
  const helper = props.helper;
  const UserRating = RatingCalculator(helper.helper_reviews);

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
                <span key={i} className='rating-ball'></span>
              ))}
            </div>
          ) : (
            <p>Not rated yet</p>
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
                <span>📍</span>
                {helper.zip} {helper.city} {helper.distance.toFixed(0)} km
              </li>
              <li>
                <span>💪</span>
                <ul>
                  {helper.helper_categories.map((category, i) => {
                    return <li key={i}>{category.name}</li>;
                  })}
                </ul>
              </li>

              <li>
                <span>♥️</span>
                {helper.helper_reviews.length} jobs completed
              </li>
            </ul>
          </div>
        </div>
        <p className='text-xs'>
          Helper since {moment(helper.date_joined).format('D MMM Y')}
        </p>
      </Link>
    </>
  );
};
