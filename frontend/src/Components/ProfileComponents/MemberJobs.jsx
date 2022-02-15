import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const MemberJobs = (props) => {
  const [allJobs, setAllJobs] = useState([]);
  const currentProfile = JSON.parse(localStorage.getItem('userData'));
  console.log(currentProfile.username);
  useEffect(() => {
    getData('job/list/', setAllJobs);
  }, []);

  console.log('hello form jobs');
  return (
    <>
      {allJobs && (
        <div className='jobs-container flex flex-col border justify-around items-center'>
          {allJobs
            .filter(({ member_username }) =>
              member_username.includes(currentProfile.username)
            )
            .map((job, i) => (
              <Smallcard key={i} job={job} />
            ))}
        </div>
      )}
    </>
  );
};
