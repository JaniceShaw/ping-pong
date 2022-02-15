import { Link } from 'react-router-dom';

export const Smallcard = (props) => {
  const job = props.job;
  return (
    <>
      <Link to={`/job/${job.id}`} className='pt-5'>
        <div className='jobs-container flex flex-col justify-around items-center border border-blue-800 p-2 rounded-md'>
          <div className='card-header mb-4 text-left flex'>
            <h1 className='font-bold justify-items-start'>{job.title}</h1>
          </div>
          <div className='card-body grid grid-cols-2 gap-2 p-0'>
            <div className='card-content'>
              <h2>Finished: 21/2/2022</h2>
              <div className='flex'>
                {[...Array(5)].map((rate, i) =>
                  i >= job.rating ? (
                    <span className='rating-big-gray-ball' />
                  ) : (
                    <span key={i} className='rating-big-ball'></span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
