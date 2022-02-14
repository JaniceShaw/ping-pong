import RatingBalls from '../../Assets/icons/Rating balls.svg';
import { useState } from 'react';
import { EditMember } from './EditMember';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';
// import { MemberJobs } from './MemberJobs';

export const MemberInfo = (props) => {
  const [edit_member, setEditMember] = useState(false);
  const [member_info, setMemberInfo] = useState(true);

  const handleEditToggle = () => {
    if (edit_member === false) {
      setEditMember(true) && setMemberInfo(false);
    } else {
      setEditMember(false) && setMemberInfo(true);
    }
  };

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(`user/member/${props.profileID}/`, setUser, setError)
  },
  []
  )
  
  return (
    <>
      <div className='upper_container'>
        <h1 className='text-4xl font-bold font-primary'>{user.username}</h1>
        <div>
        <h2 className='text-xl text-primary'>Last seen: {user.last_login}</h2>
        <img src={RatingBalls} alt='here should be the rating' />
        </div>
        

        <div className='quick_intro flex'>
          <img className='h-40' src={user.profile_pic}/>
          <div>
            <p className='text-primary pb-2'>{user.zip}, {user.city}</p>
            <p className='text-primary'>{user.description}</p>
          </div>
        </div>

        <div className='flex w-72 justify-evenly'>
          <div className='languages w-1/2 flex justify-evenly'>
          </div>
        </div>

        <button
          onClick={handleEditToggle}
          className='font-semibold rounded pl-4 pr-4 bg-secondary'>
          Edit Profile
        </button>

        {edit_member === false && member_info === true ? null : <EditMember />}
      </div>
    </>
  );
};
