import { Link } from 'react-router-dom';
import JobPlaceholder from '../../Assets/placeholder/job_placeholder.png';
import moment from 'moment';

export const JobCard = (props) => {
  const job = props.job;
  return (
    <Link to={`/view-job/${job.id}`} className='card_container border-2 p-2'>
      <div className='card-header'>
        <h1 className='font-bold'>{job.title}</h1>
        <p className='text-xs'>
          created: {moment(job.created).format('D.M.Y')}
        </p>
      </div>
      <div className='card-body'>
        <img
          src={job.img_one ? job.img_one : JobPlaceholder}
          alt=''
          className='object-cover h-52 w-full'
        />
        <div className='info-box'>
          <p>{job.description}</p>
          <ul className='grid grid-cols-2 gap-2'>
            <li>💲 {job.budget ? job.budget : 'not defined'}</li>
            <li>💪 {job.category_name}</li>
            <li>
              📍 {job.zip ? job.zip : 'xxxx'}{' '}
              {job.city ? job.city : 'some city'}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
