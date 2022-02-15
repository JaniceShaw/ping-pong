import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const HelperJobs = (props) => {
  const [jobsList, setJobsList] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);

  const [error, setError] = useState('');
  const user = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    getData(`job/list/`, setJobsList, setError);
    getData(
      `job/review/helper/${props.profileID || user.id}/`,
      setCompletedJobs,
      setError
    );
  }, []);

  return (
    <>
      <h1 className='uppercase font-bold mt-4 mb-2'>Accepted Jobs</h1>
      <div className='grid gap-4 mb-12'>
        {jobsList
          .filter((job) => job.status === 2)
          .filter((job) => job.helper_username === user.username)
          .map((job, i) => (
            <Smallcard key={i} job={job} />
          ))}
      </div>
      <h1 className='uppercase font-bold mt-4 mb-2'>Completed Jobs</h1>
      <div className='grid gap-4'>
        {completedJobs.length > 0
          ? completedJobs.map((job, i) => <Smallcard key={i} job={job} />)
          : 'No completed jobs yet'}
      </div>
    </>
  );
};
