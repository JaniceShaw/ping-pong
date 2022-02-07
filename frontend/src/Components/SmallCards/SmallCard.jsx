import { Link } from 'react-router-dom';
import RatingBalls from '../../Assets/icons/Rating balls.svg';

export const Smallcard = () => {
  return (
    <>
      <Link
        to="/job"
        className=" flex flex-col
         border-2 border-black justify-center items-center"
      >
        <h2>
          <b> Resume</b>
        </h2>
        <div className="lower-box flex">
          <p>finished: 21.1.2022</p>
          <img src={RatingBalls} alt="here should be the rating balls" />
        </div>
      </Link>
    </>
  );
};
