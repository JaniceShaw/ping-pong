import moment from 'moment';
import { Link } from 'react-router-dom';

export const Smallcard = (props) => {
  const job = props.job;
  console.log(job);
  return (
    <>
      <Link to={`/job/${job.id}`} className='card_container p-2'>
        <div className='card-header'>
          <p className='font-bold justify-items-start capitalize'>
            {job.title || job.job_title}
          </p>
          <p>For: {job.member_username || 'Bruna Burnhilde'}</p>
        </div>
        <div className='card-body p-0'>
          <div className='card-content'>
            {job.rating ? (
              <p>Completed: {moment(job.created).format('DD MMM YY')}</p>
            ) : (
              <p>Urgency: {job.urgency}</p>
            )}
            <div className='flex'>
              {job.rating &&
                [...Array(5)].map((rate, i) =>
                  i >= job.rating ? (
                    <span key={i} className='rating-big-gray-ball' />
                  ) : (
                    <span key={i} className='rating-big-ball'></span>
                  )
                )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
