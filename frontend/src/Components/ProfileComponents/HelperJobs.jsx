import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const HelperJobs = (props) => {
  const [jobsList, setJobsList] = useState([]);
  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('userData'));

  const acceptedJobs = jobsList.filter((job) => job.status === 2);

  const completedJobs = jobsList.filter((job) => job.status === 3);

  useEffect(() => {
    getData(`job/helper/${props.profileID || user.id}/`, setJobsList, setError);
  }, [user]);

  return (
    <>
      <div>
        <h1 className='uppercase font-bold mt-4 mb-2'>
          Accepted Jobs ({acceptedJobs.length})
        </h1>
        <div className='grid gap-4 mb-12'>
          {acceptedJobs.map((job, i) => (
            <Smallcard key={i} job={job} />
          ))}
        </div>
      </div>
      <div>
        <h1 className='uppercase font-bold mt-4 mb-2'>
          Completed Jobs ({completedJobs.length})
        </h1>
        <div className='grid gap-4 mb-12'>
          {completedJobs.map((job, i) => (
            <Smallcard key={i} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};
