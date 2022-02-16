import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HelperInfo } from '../../../Components/ProfileComponents/HelperInfo';
import { HelperJobs } from '../../../Components/ProfileComponents/HelperJobs';
import { EditHelper } from '../../../Components/ProfileComponents/EditHelper';
import { useEffect } from 'react';
import { getData } from '../../../Hooks/DataFetching';

export const HelperProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [showJobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  const [editHelper, setEditHelper] = useState(false);
  const [helperInfo, setHelperInfo] = useState(true);

  useEffect(() => {
    getData(`user/helper/${profileID || userData.id}/`, setProfile, setError);
  }, []);

  const handleEditToggle = () => {
    if (editHelper === false) {
      setEditHelper(true) && setHelperInfo(false);
    } else {
      setEditHelper(false) && setHelperInfo(true);
    }
  };

  return (
    <>
      {userData.type === 2 || profileID !== 'me' ? (
        <div className='helper_profile'>
          <div className='section flex  justify-evenly -mx-4 border-b border-primary bg-white'>
            <button
              onClick={() => setShowJobs(false)}
              className={`w-full p-1 ${!showJobs ? 'bg-secondary' : ''}`}
            >
              Profile
            </button>
            <button
              onClick={() => setShowJobs(true)}
              className={`w-full p-1 ${showJobs ? 'bg-secondary' : ''}`}
            >
              Jobs
            </button>
          </div>
          {!showJobs ? (
            <HelperInfo profileID={profileID} profileData={profile} />
          ) : (
            <HelperJobs profileID={profileID} profileData={profile} />
          )}

          {profileID === 'me' && showJobs === false ? (
            <button
              onClick={handleEditToggle}
              className='font-semibold rounded pl-4 pr-4 bg-secondary'
            >
              Edit Profile
            </button>
          ) : null}

          {editHelper === false && helperInfo === true ? null : <EditHelper />}
        </div>
      ) : (
        <h1 className='text-2xl font-extrabold'>Wrong Page Buddy</h1>
      )}
    </>
  );
};
