import { useState } from 'react';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';

export const HelperProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);

  return (
    <>
      <div className='section flex  justify-evenly '>
        <button
          onClick={() => setShowJobs(false)}
          className='border-2 border-black w-full'>
          Profile
        </button>
        <button
          onClick={() => setShowJobs(true)}
          className='border-2 border-black w-full'>
          Jobs
        </button>
      </div>
      {!show_jobs ? <HelperInfo /> : <HelperJobs />}
    </>
  );
};
