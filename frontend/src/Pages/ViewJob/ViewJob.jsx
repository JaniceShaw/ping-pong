import EmptyReviewBall from '../../Assets/icons/empty_review_ball.jpg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ViewJob = () => {
  const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';
  const [jobData, setJobData] = useState([]);
  const { jobID } = useParams();
  const token = localStorage.getItem('token');

  const [error, setError] = useState('');

  const fetchJobData = () => {
    axios
      .get(`${APIurlPrefix}job/${jobID}/`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          return setJobData(res.data);
        } else {
          setError(res.statusText);
        }
      });
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  console.log(jobData);

  return (
    <>
      <h1>Title: {jobData.title}</h1>
      <h4>Created on: {jobData.created}</h4>
      <br />
      <div>
        <div>
          Zip code:{jobData.member_zip} , City: {jobData.member_city}
        </div>
        <div>Category: {jobData.category}</div>
        <div>Urgency level: {jobData.urgency}</div>
        <div>Budget: {jobData.budget}</div>
      </div>
      <br />
      <div className='w-full carousel'>
        <div id='item1' className='w-full pt-20 carousel-item'>
          <img src={jobData.img_one} className='w-full' />
        </div>
        <div id='item2' className='w-full pt-20 carousel-item'>
          <img src={jobData.img_two} className='w-full' />
        </div>
        <div id='item3' className='w-full pt-20 carousel-item'>
          <img src={jobData.img_three} className='w-full' />
        </div>
      </div>
      <p>Description: {jobData.description}</p>

      <br />

      <div className='lower-container flex-row justify-center'>
        <p>Status</p>
        <div className='btn-group rounded overflow-hidden flex justify-center drop-shadow-2xl'>
          <button
            className={`w-full font-semibold pt-1 pb-1
            ${
              jobData.status === 1
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
          >
            Pending
          </button>
          <button
            className={`w-full font-semibold pt-1 pb-1
            ${
              jobData.status === 2
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
          >
            Accepted
          </button>
          <button
            className={`w-full font-semibold pt-1 pb-1
            ${
              jobData.status === 3
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
          >
            Completed
          </button>
        </div>
        <br />

        <div className=''>
          <p>Assigned Helper</p>
          <div className='bg-indigo-900 text-amber-400 justify-center text-center rounded pt-1 pb-1 font-semibold'>
            <p>{jobData.helper}</p>
          </div>
          <br />
          <div className='job-rating justify-between flex w-full flex-col'>
            <div className='top flex flex-grow justify-center'>
              <p className='w-full justify-center'>Job Rating</p>
              <div className='flex h-3/6 w-3/6 justify-center '>
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
              </div>
            </div>
            <div className='bottom'>
              <p>Available after completing</p>
            </div>
          </div>
          <br />
          <div className='user-rating justify-between flex w-full flex-col'>
            <div className='top flex flex-grow justify-center'>
              <p className='w-full justify-center'>User Rating</p>
              <div className='flex h-3/6 w-3/6 justify-center '>
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
                <img
                  className='pr-1'
                  src={EmptyReviewBall}
                  alt='here should be the empty review ball'
                />
              </div>
            </div>
            <div className='bottom'>
              <p>Available after completing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
