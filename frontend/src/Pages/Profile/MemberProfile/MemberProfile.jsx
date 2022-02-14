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
      {!show_jobs ? <MemberInfo profileID={profileID} /> : <MemberJobs profileID={profileID} />}
    </>
  );
};
