import React from 'react';
import { useState, useEffect } from 'react';
import { HelperCard } from '../../../Components/BigCards/HelperCard';
import { ListingFilter } from '../../../Components/ListingFilter/ListingFilter';
import { getData } from '../../../Hooks/DataFetching';

export const HelperListPage = () => {
  const [helpersList, setHelpersList] = useState([]);
  const [filteredHelpersList, setFilteredHelpersList] = useState([]);
  const [error, setError] = useState(null);

  const filterList = (array) => {
    setFilteredHelpersList(array);
  };

  useEffect(() => {
    getData('user/list/helpers/', setHelpersList);
  }, [ListingFilter]);
  return (
    <>
      <ListingFilter filteredList={filterList} unfilteredList={helpersList} />
      <div id='results_list' className='grid gap-4'>
        <p>{filteredHelpersList.length} helper listed</p>
        {filteredHelpersList.map((helper, i) => (
          <HelperCard key={i} helper={helper} />
        ))}
      </div>
    </>
  );
};
