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
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  const [edit_helper, setEditHelper] = useState(false);
  const [helper_info, setHelperInfo] = useState(true);

  useEffect(() => {
    console.log('Hello from useEffect');
    getData(`user/helper/${profileID}/`, setProfile, setError);
  }, []);

  console.log(profile);

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
              className={`w-full p-1 ${!show_jobs ? 'bg-secondary' : ''}`}>
              Profile
            </button>
            <button
              onClick={() => setShowJobs(true)}
              className={`w-full p-1 ${show_jobs ? 'bg-secondary' : ''}`}>
              Jobs
            </button>
          </div>
          {!show_jobs ? (
            <HelperInfo profileID={profileID} profileData={profile} />
          ) : (
            <HelperJobs profileID={profileID} profileData={profile} />
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
        <h1 className='text-2xl font-extrabold'>Wrong Page Buddy</h1>
      )}
    </>
  );
};
