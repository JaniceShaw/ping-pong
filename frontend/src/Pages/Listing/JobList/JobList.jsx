import React from 'react';
import { useEffect, useState } from 'react';
import { JobCard } from '../../../Components/BigCards/JobCard';
import { getData } from '../../../Hooks/DataFetching';
import { ListingFilter } from '../../../Components/ListingFilter/ListingFilter';
import { FilterHeader } from '../Filter_Header';
import { Link } from 'react-router-dom';

export const JobListPage = () => {
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobsList, setFilteredJobsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData('job/list/', setJobsList, setError);
  }, [ListingFilter]);

  return (
    <>
      <FilterHeader
        unfilteredList={jobsList}
        filteredList={filteredJobsList}
        ListItemName={'jobs'}
        ReturningFunction={setFilteredJobsList}
      />

      <div id='results_list' className='grid gap-4 pt-4 max-w-md m-auto px-3'>
        <p>{error}</p>
        <Link to='/job/new' className='btn'>
          create job request
        </Link>

        {filteredJobsList.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </>
  );
};
