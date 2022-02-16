import React, { useState, useEffect } from 'react';
import { HelperCard } from '../../../Components/BigCards/HelperCard';
import { getData } from '../../../Hooks/DataFetching';
import { FilterHeader } from '../Filter_Header';
import { Link } from 'react-router-dom';

export const HelperListPage = () => {
  const [helpersList, setHelpersList] = useState([]);
  const [filteredHelpersList, setFilteredHelpersList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData('user/list/helpers/', setHelpersList, setError);
  }, [FilterHeader]);
  return (
    <>
      <FilterHeader
        unfilteredList={helpersList}
        filteredList={filteredHelpersList}
        ListItemName={'helpers'}
        ReturningFunction={setFilteredHelpersList}
      />
      <div id='results_list' className='grid gap-4 '>
        <p>{error}</p>
        <h1 className='text-lg font-bold py-4'>
          These helpers are ready to lend a helping hand
        </h1>
        <Link to='/job/new' className='btn mb-4'>
          create job request
        </Link>
        {filteredHelpersList.map((helper, i) => (
          <HelperCard key={i} helper={helper} />
        ))}
      </div>
    </>
  );
};
