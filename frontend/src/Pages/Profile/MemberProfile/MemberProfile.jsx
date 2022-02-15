import { useState } from 'react';
import { MemberInfo } from '../../../Components/ProfileComponents/MemberInfo';
import { MemberJobs } from '../../../Components/ProfileComponents/MemberJobs';
import { useParams } from 'react-router-dom';

export const MemberProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();

  console.log(useParams());

  return (
    <>
      <div className='list-container flex w-screen border-b -mx-4 border-primary bg-white z-30 relative'>
        <button
          onClick={() => setShowJobs(false)}
          className={`w-full p-1 ${!show_jobs ? 'bg-secondary' : ''}`}
        >
          Profile
        </button>
        <button
          onClick={() => setShowJobs(true)}
          className={`w-full p-1 ${show_jobs ? 'bg-secondary' : ''}`}
        >
          Jobs
        </button>
      </div>
      {!show_jobs ? (
        <MemberInfo profileID={profileID} />
      ) : (
        <MemberJobs profileID={profileID} />
      )}
    </>
  );
};
