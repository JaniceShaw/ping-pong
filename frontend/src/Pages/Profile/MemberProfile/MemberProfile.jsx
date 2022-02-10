import { useState } from 'react';
import { MemberInfo } from '../../../Components/ProfileComponents/MemberInfo';
import { MemberJobs } from '../../../Components/ProfileComponents/MemberJobs';

export const MemberProfilePage = () => {
  const [member_jobs, setMemberJobs] = useState(false);
  const [member_info, setMemberInfo] = useState(true);

  const handleComponentToggle = () => {
    if (member_jobs === false) {
      setMemberJobs(true) && setMemberInfo(false);
    } else {
      setMemberJobs(false) && setMemberInfo(true);
    }
  };

  return (
    <>
      <div className='section flex flex-col justify-evenly '>
        <button
          onClick={handleComponentToggle}
          className='border-2 border-black w-full'>
          Jobs
        </button>
        {member_jobs === false && member_info === true ? (
          <MemberInfo />
        ) : (
          <MemberJobs />
        )}
      </div>
    </>
  );
};
