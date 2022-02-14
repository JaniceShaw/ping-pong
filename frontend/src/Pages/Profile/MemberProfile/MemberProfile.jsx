import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MemberInfo } from '../../../Components/ProfileComponents/MemberInfo';
import { MemberJobs } from '../../../Components/ProfileComponents/MemberJobs';
import { EditMember } from '../../../Components/ProfileComponents/EditMember';
import { useEffect } from 'react';
import { getData } from '../../../Hooks/DataFetching';

const userData = JSON.parse(localStorage.getItem('userData'));

export const MemberProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [edit_member, setEditMember] = useState(false);
  const [member_info, setMemberInfo] = useState(true);

  useEffect(() => {
    getData(`user/member/${profileID}/`, setUser, setError);
  }, []);

  const handleEditToggle = () => {
    if (edit_member === false) {
      setEditMember(true) && setMemberInfo(false);
    } else {
      setEditMember(false) && setMemberInfo(true);
    }
  };
  return (
    <>
      {userData.type === 1 || profileID !== 'me' ? (
        <div className='memberProfile'>
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
            <MemberInfo profileID={profileID} profileData={user} />
          ) : (
            <MemberJobs profileID={profileID} profileData={user} />
          )}

          {profileID === 'me' && show_jobs === false ? (
            <button
              onClick={handleEditToggle}
              className='font-semibold rounded pl-4 pr-4 bg-secondary'>
              Edit Profile
            </button>
          ) : null}

          {edit_member === false && member_info === true ? null : (
            <EditMember />
          )}
        </div>
      ) : (
        <h1 className='text-2xl font-extrabold'>Wrong Page Buddy</h1>
      )}
    </>
  );
};
