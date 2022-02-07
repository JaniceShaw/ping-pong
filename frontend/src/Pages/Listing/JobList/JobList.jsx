import React from 'react';
import { useState } from 'react';
import { JobCard } from '../../../Components/BigCards/JobCard';

import {
  deleteData,
  getData,
  patchData,
  postData,
} from '../../../Hooks/DataFetching';

export const JobListPage = () => {
  const [jobsList, setJobsList] = useState([]);
  const [response, setResponse] = useState([]);

  const makePost = () => {
    postData(
      'job/request/',
      { title: 'testpost', description: 'just testing a bit' },
      setResponse
    );
  };

  const deletePost = () => {
    deleteData('job/', 2);
  };

  const patchPost = () => {
    patchData('job/', 8, { title: 'changing title' }, setResponse);
  };

  console.log(response);
  useState(() => {
    getData('job/list/', setJobsList);
  }, []);
  return (
    <div id='results_list' className='grid gap-4'>
      {/* <button className="btn btn-blue" onClick={makePost}>
        make post
      </button>{' '}
      <button className="btn btn-blue" onClick={deletePost}>
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
