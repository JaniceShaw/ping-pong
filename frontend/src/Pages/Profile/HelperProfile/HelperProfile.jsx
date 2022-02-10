import { useState } from 'react';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';

export const HelperProfilePage = () => {
  const [helper_jobs, setHelperJobs] = useState(false);
  const [helper_info, setHelperInfo] = useState(true);

  const handleComponentToggle = () => {
    if (helper_jobs === false) {
      setHelperJobs(true) && setHelperInfo(false);
    } else {
      setHelperJobs(false) && setHelperInfo(true);
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
        {helper_jobs === false && helper_info === true ? (
          <HelperInfo />
        ) : (
          <HelperJobs />
        )}
      </div>
    </>
  );
};
