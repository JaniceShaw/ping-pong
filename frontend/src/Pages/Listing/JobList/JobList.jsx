import React from 'react';
import { useEffect, useState } from 'react';
import { JobCard } from '../../../Components/BigCards/JobCard';

import { getData } from '../../../Hooks/DataFetching';
import { ListingFilter } from '../../../Components/ListingFilter/ListingFilter';

export const JobListPage = () => {
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobsList, setFilteredJobsList] = useState([]);
  const [error, setError] = useState(null);

  const filterList = (array) => {
    setFilteredJobsList(array);
  };

  useEffect(() => {
    getData('job/list/', setJobsList, setError);
  }, [ListingFilter]);

  return (
    <>
      <ListingFilter filteredList={filterList} unfilteredList={jobsList} />
      <div id='results_list' className='grid gap-4'>
        <p>{filteredJobsList.length} jobs listed</p>

        {filteredJobsList.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </>
  );
};
