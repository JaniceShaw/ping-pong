import React from 'react';
import { useEffect, useState } from 'react';
import { JobCard } from '../../../Components/BigCards/JobCard';

import { getData } from '../../../Hooks/DataFetching';
import { ListingFilter } from '../../../Components/ListingFilter/ListingFilter';

export const JobListPage = () => {
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobsList, setFilteredJobsList] = useState([]);
  const [error, setError] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const filterList = (array) => {
    setFilteredJobsList(array);
  };

  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    getData('job/list/', setJobsList, setError);
  }, [ListingFilter]);

  return (
    <>
      <button
        onClick={toggleFilterVisibility}
        className='relative font-normal border-b border-primary -mx-4 px-4 h-8 w-screen relative z-10 bg-white'
      >
        Filter
      </button>
      <ListingFilter
        filteredList={filterList}
        unfilteredList={jobsList}
        showFilter={showFilter}
      />
      <div id='results_list' className='grid gap-4'>
        <p>{filteredJobsList.length} jobs listed</p>

        {filteredJobsList.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </>
  );
};
