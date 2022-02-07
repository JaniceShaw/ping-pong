import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Category } from '../TailwindComp/CategorySelect';

export const SearchTool = () => {
  const [keyword, setKeyword] = useState('');
  const [zipcode, setZIPCode] = useState('');

  const navigate = useNavigate();

  const handleSearchRequest = (event) => {
    event.preventDefault();
    navigate('/listing/helpers');
  };

  const handleKeywordInput = (event) => {
    setKeyword(event.target.value);
  };

  const handleZIPCode = (event) => {
    setZIPCode(event.target.value);
  };

  return (
    <form>
      <input
        onChange={handleKeywordInput}
        type='text'
        value={keyword}
        placeholder='Search...'
      />
      <Category />
      <input
        onChange={handleZIPCode}
        type='text'
        value={zipcode}
        placeholder='Enter your ZIP Code'
      />
      <input onClick={handleSearchRequest} type='submit' placeholder='GO' />
    </form>
  );
};
