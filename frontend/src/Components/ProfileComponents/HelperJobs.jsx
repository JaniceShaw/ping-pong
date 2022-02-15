import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const HelperJobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getData('job/review/helper/3/', setJobsList, setError);
  }, []);

  return (
    <>
      <div className='jobs-container flex flex-col justify-around items-center'>
        {jobsList.map((job, i) => (
          <Smallcard job={job} key={i} />
        ))}
      </div>
    </>
  );
};
