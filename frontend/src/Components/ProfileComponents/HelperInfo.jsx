import RobertoRodriguez from '../../Assets/placeholder/rodrigo-image.jpg';
import RatingBalls from '../../Assets/icons/Rating balls.svg';
import { useState } from 'react';
import { EditHelper } from './EditHelper';
import { Link } from 'react-router-dom';

export const HelperInfo = () => {
  const [edit_helper, setEditHelper] = useState(false);
  const [helper_info, setHelperInfo] = useState(true);

  const handleEditToggle = () => {
    if (edit_helper === false) {
      setEditHelper(true) && setHelperInfo(false);
    } else {
      setEditHelper(false) && setHelperInfo(true);
    }
  };
  return (
    <>
      <div className='upper_container'>
        <h2>Member since 02.1.2022</h2>

        <div className='quick_intro flex'>
          <img
            src={RobertoRodriguez}
            alt='here should be the profile page'
            className='h-24'
          />
          <div>
            <p>8050 Zürich</p>
            <p>
              My name is Roberto Rodriguez and i’m an apprentice for the company
              Sanitär AG in Sumiswald.
            </p>
          </div>
        </div>

        <div className='flex w-72 justify-evenly'>
          <img src={RatingBalls} alt='here should be the rating' />
          <div className='languages w-1/2 flex justify-evenly'>
            <p>💬</p>
            <p>DE</p>
            <p>ENG</p>
            <p>IT</p>
          </div>
        </div>

        <button
          onClick={handleEditToggle}
          className='border-2 rounded border-black bg-orange-500'>
          Edit Profile
        </button>

        {edit_helper === false && helper_info === true ? null : <EditHelper />}

        <h1>Verified User</h1>

        <Link to='/private-job' className='flex justify-end'>
          <button className='border-2 border-black rounded-lg bg-orange-400'>
            send direct job-request
          </button>
        </Link>
      </div>

      <div className='lower_container'>
        <div className='border-b-4 border-orange-400'>
          <h1>
            <b>Skills</b>
          </h1>
        </div>

        <div className='skills-card'>
          <b>Plumbing</b>
          <p>subcategory1</p>
        </div>

        <div className='skills-card'>
          <b>Painting</b>
          <p>subcategory1</p>
        </div>

        <div className='skills-card'>
          <b>Painting</b>
          <p>subcategory1</p>
        </div>
      </div>
    </>
  );
};
