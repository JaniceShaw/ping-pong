import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const MemberJobs = () => {
  const [member_jobs, setMemberJobs] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getData('/job/list/review/member', setMemberJobs, setError);
  }, []);

  return (
    <>
      <div className='jobs-container flex flex-col justify-around items-center'>
        {/* {member_jobs.map((job, i) => (
          <Smallcard key={i} job={job} />
        ))} */}
      </div>
    </>
  );
};
