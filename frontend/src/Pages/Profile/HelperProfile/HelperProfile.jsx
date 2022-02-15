import { useState } from 'react';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';
import { useParams } from 'react-router-dom';


export const HelperProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  
  return (
    <>
      <div className='list-container flex w-screen border-b -mx-4 border-primary bg-white z-40 relative'>
        <button
          onClick={() => setShowJobs(false)}
          
          className={`w-full p-1 ${!show_jobs ? 'bg-secondary' : ''}`}>
          Profile
        </button>
        <button
          onClick={() => setShowJobs(true)}
          className={`w-full p-1 ${show_jobs ? 'bg-secondary' : ''}`}>
          Jobs
        </button>
      </div>
      {!show_jobs ? <HelperInfo profileID={profileID} /> : <HelperJobs profileID={profileID} />}
    </>
  );
};
