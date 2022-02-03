import RobertoRodriguez from '../../assets/placeholder/rodrigo-image.jpg';
import { Link } from 'react-router-dom';

export const HelperCard = () => {
  return (
    <>
      <Link
        to='/helper-profile'
        className='card_container justify-aroundborder-2 flex'>
        <img src={RobertoRodriguez} alt='' className='h-24 object-cover' />
        <div className='info-box'>
          <h2>Rodrigo</h2>
          <label for='rating' className='flex'>
            Rating :<p id='rating'>Rating</p>
          </label>
          <label for='skills' className='flex'>
            Skills :<p id='skills'>Writing Resumes</p>
          </label>
          <label for='location' className='flex'>
            Location :<p id='location'>8050 Zurich</p>
          </label>
          <label for='language' className='flex'>
            Language :<p id='language'>ENG, DE</p>
          </label>
        </div>
      </Link>
    </>
  );
};
