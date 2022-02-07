import React from 'react';
import { useState } from 'react';
import { HelperCard } from '../../../Components/BigCards/HelperCard';
import { getData } from '../../../Hooks/DataFetching';

export const HelperListPage = () => {
  const [helpersList, setHelpersList] = useState([]);

  useState(() => {
    getData('user/list/helpers/', setHelpersList);
  }, []);
  return (
    <>
      <div id='results_list' className='grid gap-4'>
        {helpersList.map((helper, i) => (
          <HelperCard key={i} helper={helper} />
        ))}
      </div>
    </>
  );
};
