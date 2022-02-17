import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MemberInfo } from '../../../Components/ProfileComponents/MemberInfo';
import { MemberJobs } from '../../../Components/ProfileComponents/MemberJobs';
import { EditMember } from '../../../Components/ProfileComponents/EditMember';
import { getData } from '../../../Hooks/DataFetching';

const userData = JSON.parse(localStorage.getItem('userData'));

export const MemberProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);
  const [editMember, setEditMember] = useState(false);
  const [memberInfo, setMemberInfo] = useState(true);

  useEffect(() => {
    getData(`user/member/${profileID || userData.id}/`, setProfile, setError);
  }, []);

  const handleEditToggle = () => {
    if (editMember === false) {
      setEditMember(true) && setMemberInfo(false);
    } else {
      setEditMember(false) && setMemberInfo(true);
    }
  };

  return (
    <div className='max-w-lg  m-auto'>
      {userData.type === 1 || profileID !== 'me' ? (
        <div className='member_profile'>
          <div className='section flex justify-evenly -mx-4 border-b border-primary'>
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
          {show_jobs ? (
            <MemberJobs profileID={profileID} profileData={profile} />
          ) : (
            <MemberInfo profileID={profileID} profileData={profile} />
          )}

          {profileID === 'me' && show_jobs === false ? (
            <button
              onClick={handleEditToggle}
              className='font-semibold rounded pl-4 pr-4 bg-secondary'
            >
              Edit Profile
            </button>
          ) : null}

          {editMember === false && memberInfo === true ? null : <EditMember />}
        </div>
      ) : (
        <h1 className='text-2xl font-extrabold'>Wrong Page Buddy</h1>
      )}
      {/* <p>{error}</p> */}
    </div>
  );
};
