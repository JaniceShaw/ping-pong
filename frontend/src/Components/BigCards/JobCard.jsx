import { Link } from 'react-router-dom';
import JobPlaceholder from '../../Assets/placeholder/job_placeholder.png';
import moment from 'moment';

export const JobCard = (props) => {
  const job = props.job;

  const urgencyLevels = [
    { icon: '🐌', text: 'I can wait' },
    { icon: '🙏', text: 'Soon please' },
    { icon: '⚡️', text: 'Emergency' },
  ];

  return (
    <Link to={`/job/${job.id}`} className='card_container border-2 p-2'>
      <div className='card-title'>
        <h1 className='font-bold'>{job.title}</h1>
        <p className='text-xs font-normal'>
          Created: {moment(job.created).fromNow()} from {job.member_username}
        </p>
      </div>
      <div className='card-body p-0'>
        <img
          src={job.img_one ? job.img_one : JobPlaceholder}
          alt=''
          className='object-cover h-52 w-full'
        />
        <div className='info-box'>
          <p>{job.description}</p>
          <ul className='grid grid-cols-2 gap-2'>
            <li>
              <span>💲</span>
              {job.budget ? job.budget : 'not defined'}
            </li>
            <li>
              <span>💪</span>
              {job.category_name}
            </li>
            <li>
              <span>📍</span> {job.member_zip ? job.member_zip : 'xxxx'}{' '}
              {job.member_city ? job.member_city : 'some city'}
            </li>
            <li>
              <span>↔</span> distance {job.distance.toFixed(1)} km
            </li>
            <li>
              <span className=''>{urgencyLevels[job.urgency - 1].icon}</span>
              {urgencyLevels[job.urgency - 1].text}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
