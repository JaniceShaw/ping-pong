import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';
import { EditHelper } from '../../../Components/ProfileComponents/EditHelper';
import { useEffect } from 'react';
import { getData } from '../../../Hooks/DataFetching';

const userData = JSON.parse(localStorage.getItem('userData'));

export const HelperProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [edit_helper, setEditHelper] = useState(false);
  const [helper_info, setHelperInfo] = useState(true);

  useEffect(() => {
    getData(`user/helper/${profileID}/`, setUser, setError);
  }, []);

  const handleEditToggle = () => {
    if (edit_helper === false) {
      setEditHelper(true) && setHelperInfo(false);
    } else {
      setEditHelper(false) && setHelperInfo(true);
    }
  };

  return (
    <>
      {userData.type === 2 || profileID !== 'me' ? (
        <div className='helper_profile'>
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
          {!show_jobs ? (
            <HelperInfo profileID={profileID} profileData={user} />
          ) : (
            <HelperJobs profileID={profileID} profileData={user} />
          )}

          {profileID === 'me' && show_jobs === false ? (
            <button
              onClick={handleEditToggle}
              className='font-semibold rounded pl-4 pr-4 bg-secondary'>
              Edit Profile
            </button>
          ) : null}

          {edit_helper === false && helper_info === true ? null : (
            <EditHelper />
          )}
        </div>
      ) : (
        <h1>wrong page</h1>
      )}
    </>
  );
};
