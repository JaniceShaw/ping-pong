import { Link } from 'react-router-dom';
import JobPlaceholder from '../../Assets/placeholder/job_placeholder.png';

export const JobCard = (props) => {
  const job = props.job;
  return (
    <Link
      to={`/job-view/${job.id}`}
      className='card_container border-2 grid grid-cols-2 gap-2'
    >
      <div>
        <img
          src={job.img_one ? job.img_one : JobPlaceholder}
          alt=''
          className='object-cover h-full'
        />
      </div>
      <div className='info-box'>
        <h1 className='font-bold'>{job.title}</h1>
        <ul className=''>
          <li>Budget: {job.budget}</li>
          <li>category: {job.category_name}</li>
          <li>
            Location: {job.zip} {job.city}
          </li>
          <li>Language: ENG, DE</li>
        </ul>
      </div>
    </Link>
  );
};
