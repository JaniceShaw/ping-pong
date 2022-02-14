import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MemberInfo } from '../../../Components/ProfileComponents/MemberInfo';
import { MemberJobs } from '../../../Components/ProfileComponents/MemberJobs';
<<<<<<< HEAD
import { EditMember } from '../../../Components/ProfileComponents/EditMember';
import { useEffect } from 'react';
import { getData } from '../../../Hooks/DataFetching';
=======
import { useParams } from 'react-router-dom';
>>>>>>> master

export const MemberProfilePage = () => {
  const [show_jobs, setShowJobs] = useState(false);
  const { profileID } = useParams();
<<<<<<< HEAD
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [edit_member, setEditMember] = useState(false);
  const [member_info, setMemberInfo] = useState(true);
=======

  console.log(useParams());
>>>>>>> master

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
<<<<<<< HEAD
      {!show_jobs ? (
        <MemberInfo profileID={profileID} profileData={user} />
      ) : (
        <MemberJobs profileID={profileID} profileData={user} />
      )}

      {profileID === 'me' ? (
        <button
          onClick={handleEditToggle}
          className='font-semibold rounded pl-4 pr-4 bg-secondary'>
          Edit Profile
        </button>
      ) : null}

      {edit_member === false && member_info === true ? null : <EditMember />}
=======
      {!show_jobs ? <MemberInfo profileID={profileID} /> : <MemberJobs profileID={profileID} />}
>>>>>>> master
    </>
  );
};
