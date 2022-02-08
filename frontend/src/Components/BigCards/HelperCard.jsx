import ProfilePlaceholder from '../../Assets/placeholder/profile_placeholder.png';
import { Link } from 'react-router-dom';

export const HelperCard = (props) => {
  const helper = props.helper;

  return (
    <>
      <Link
        to={`/helper-profile/${helper.id}`}
        className='card_container justify-around border-2 grid grid-cols-2 gap-2'
      >
        <div>
          <img
            src={helper.profile_pic ? helper.profile_pic : ProfilePlaceholder}
            alt=''
            className='object-cover h-full'
          />
        </div>
        <div className='info-box'>
          <h2 className='font-bold'>{helper.username}</h2>
          <ul>
            <li>Rating: Rating</li>
            <li>Skills: Writing Resumes</li>
            <li>
              Location: {helper.zip} {helper.city}
            </li>
            {/* <li> Language: ENG, DE, IT</li> */}
          </ul>
        </div>
      </Link>
    </>
  );
};
