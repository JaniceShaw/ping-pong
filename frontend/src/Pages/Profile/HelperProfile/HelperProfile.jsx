import { useState } from 'react';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';
import { useParams } from 'react-router-dom';


export const HelperProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  
  return (
    <>
      <div className='pt-3 section flex w-screen -mx-4 border-b border-b-1 border-primary grow-1 justify-center'>
        <button
          onClick={() => setShowJobs(false)}
          className='border-primary border-r-1 border-r text-2xl content-center'>
          Profile
        </button>
        <button
          onClick={() => setShowJobs(true)}
          className='border-primary border-l-1 border-l text-2xl content-center'>
          Jobs
        </button>
      </div>
      {!show_jobs ? <HelperInfo profileID={profileID} /> : <HelperJobs profileID={profileID} />}
    </>
  );
};
