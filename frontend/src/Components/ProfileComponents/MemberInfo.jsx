import Anemarie from '../../assets/placeholder/anemarie.png';
import RatingBalls from '../../assets/icons/Rating balls.svg';

export const MemberInfo = () => {
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

      </div>
    </>
  );
};
