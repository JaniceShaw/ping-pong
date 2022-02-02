import React from 'react';
import { Link } from 'react-router-dom';
import RodrigoImage from '../../../assets/placeholder/rodrigo-image.jpg';

export const HelperListPage = () => {
  return (
    <>
      <Link to='/profile' className='card_container' class='border-2 flex'>
        <img src={RodrigoImage} alt='' className='h-24 object-cover' />
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

      <Link to= '/profile' className='card_container border-2 flex'>
        <img src={RodrigoImage} alt='' className='h-24 object-cover' />
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

      <Link to='/profile' className='card_container border-2 flex'>
        <img src={RodrigoImage} alt='' className='h-24 object-cover' />
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
