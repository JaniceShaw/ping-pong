import RobertoRodriguez from '../../assets/placeholder/rodrigo-image.jpg';
import RatingBalls from '../../assets/icons/Rating balls.svg';
import { Link, Outlet } from 'react-router-dom';

export const HelperInfo = () => {
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
         
        <Link to='/helper-profile/edit/'>
        <button className='border-2 rounded border-black bg-orange-500'>
          Edit Profile
        </button>
      </Link>
      <Outlet/>

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
