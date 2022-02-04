import { Link } from 'react-router-dom';
import Resume from '../../assets/placeholder/resume.jpg';

export const TailwindCard = () => {
  return (
    <Link to='/job' class='flex justify-center'>
      <div class='flex flex-col md:flex-row md:max-w-xs rounded-lg bg-white shadow-lg'>
        <img
          class=' w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
          src={Resume}
          alt=''
        />
        <div class='p-6 flex flex-col justify-start'>
          <h5 class='text-gray-900 text-xl font-medium mb-2'>Resume</h5>
          {/* <p class='text-gray-700 text-base mb-4'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p> */}
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
          <p class='text-gray-600 text-xs'>Last updated 3 mins ago</p>
        </div>
      </div>
    </Link>
  );
};
