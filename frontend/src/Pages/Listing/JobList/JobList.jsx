import React from 'react';
import { useEffect, useState } from 'react';
import { JobCard } from '../../../Components/BigCards/JobCard';

import {
  deleteData,
  getData,
  patchData,
  postData,
} from '../../../Hooks/DataFetching';

export const JobListPage = () => {
  const [jobsList, setJobsList] = useState([]);
  const [error, setError] = useState(null);

  const makePost = () => {
    const sendingData = {
      title: 'new post',
      description: '',
    };
    postData('job/request/', sendingData, setError);
  };

  const deletePost = () => {
    deleteData('job/', 2);
  };

  const patchPost = () => {
    patchData('job/', 8, { title: 'changing title' }, setError);
  };

  useEffect(() => {
    getData('job/list/', setJobsList, setError);
  }, [jobsList]);
  return (
    <div id='results_list' className='grid gap-4'>
      {/* <button className='btn btn-blue' onClick={makePost}>
        make post
      </button>
      <p>{error}</p> */}
      {/* <button className="btn btn-blue" onClick={deletePost}>
        delete post
      </button>
      <button className="btn btn-blue" onClick={patchPost}>
        edit post
      </button> */}
      {jobsList.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  );
};
