import Anemarie from '../../Assets/placeholder/anemarie.png';
import RatingBalls from '../../Assets/icons/Rating balls.svg';
import { useState } from 'react';
import { EditMember } from './EditMember';
// import { MemberJobs } from './MemberJobs';

export const MemberInfo = () => {
  const [edit_member, setEditMember] = useState(false);
  const [member_info, setMemberInfo] = useState(true);

  const handleEditToggle = () => {
    if (edit_member === false) {
      setEditMember(true) && setMemberInfo(false);
    } else {
      setEditMember(false) && setMemberInfo(true);
    }
  };
  return (
    <>
      <div className='upper_container'>
        <h2>Member since 02.1.2022</h2>

        <div className='quick_intro flex'>
          <img
            src={Anemarie}
            alt='here should be the profile page'
            className='h-24'
          />
          <div>
            <p>4713 Matzendorf</p>
            <p>Ich bi s Anemarie und mini hose sind zchli :)</p>
          </div>
        </div>

        <div className='flex w-72 justify-evenly'>
          <img src={RatingBalls} alt='here should be the rating' />
          <div className='languages w-1/2 flex justify-evenly'>
            <p>💬</p>
            <p>CH</p>
          </div>
        </div>

        <button
          onClick={handleEditToggle}
          className='border-2 rounded border-black bg-orange-500'>
          Edit Profile
        </button>

        {edit_member === false && member_info === true ? null : <EditMember />}
      </div>
    </>
  );
};
