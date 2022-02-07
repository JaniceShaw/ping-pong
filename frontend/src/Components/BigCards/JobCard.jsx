import { Link } from 'react-router-dom';
import Resume from '../../Assets/placeholder/resume.jpg';

export const JobCard = () => {
  return (
    <Link to='/job-view' className='card_container border-2 flex'>
      <img src={Resume} alt='' className='h-24 object-cover' />
      <div className='info-box'>
        <h1>Need Help with Resume</h1>{' '}
        <label for='Salary' className='flex'>
          Salary :<p id='Salary'>Salary</p>
        </label>
        <label for='Skills required' className='flex'>
          Skills required :<p id='Skills required'>Writing Resumes</p>
        </label>
        <label for='location' className='flex'>
          Location :<p id='location'>8050 Zurich</p>
        </label>
        <label for='language' className='flex'>
          Language :<p id='language'>ENG, DE</p>
        </label>
      </div>
    </Link>
  );
};
