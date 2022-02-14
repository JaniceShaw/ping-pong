import { Link } from 'react-router-dom';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const Smallcard = () => {
  return (
    <>
      <div className='pt-5'>
        <div className='jobs-container flex flex-col justify-around items-center border border-blue-800 p-2 rounded-md'>
          <div className='card-header mb-4 text-left flex'>
            <h1 className='font-bold justify-items-start'>Title</h1>
          </div>
          <div className='card-body grid grid-cols-2 gap-2 p-0'>
            <div className='card-content'>
              <h2>Finished: 21/2/2022</h2>
              <img src={RatingBalls} alt='here should be the rating' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
