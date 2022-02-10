import ProfilePlaceholder from '../../Assets/placeholder/profile_placeholder.png';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const HelperCard = (props) => {
  const helper = props.helper;

  return (
    <>
      <Link
        to={`/helper/${helper.id}`}
        className='card_container justify-around border-2 p-2'>
        <div className='card-header'>
          <h1 className='font-bold'>{helper.username}</h1>
          <p className='text-xs'>🟠 🟠 🟠 🟠</p>
        </div>
        <div className='card-body grid grid-cols-2 gap-2'>
          <div>
            <img
              src={helper.profile_pic ? helper.profile_pic : ProfilePlaceholder}
              alt={`profile pic ${helper.username}`}
              className='object-cover h-full'
            />
          </div>
          <div className='info-box'>
            <ul>
              <li>
                📍 {helper.zip} {helper.city}
              </li>
              <li>💪 Writing Resumes</li>
              <li>🎉 Helper since 2 years</li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};
