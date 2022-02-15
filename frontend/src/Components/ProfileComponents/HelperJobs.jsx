import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
import { Smallcard } from '../SmallCards/SmallCard';

export const HelperJobs = (props) => {
  const [allJobs, setAllJobs] = useState([]);
  // const currentProfile = localStorage.getItem('username');
  // console.log(currentProfile);
  useEffect(() => {
    getData('job/list/', setAllJobs);
  }, []);
  console.log(allJobs);
  return (
    <>
      {/* {allJobs && (
        <div className='jobs-container flex flex-col border justify-around items-center'>
          {allJobs
            .filter(({ helper_username }) =>
              helper_username.includes('kostakis')
            )
            .map((job, i) => (
              <Smallcard key={i} job={job} />
            ))}
        </div>
      )} */}
      <Smallcard />
    </>
  );
};
