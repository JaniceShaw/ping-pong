import EmptyReviewBall from '../../Assets/icons/empty_review_ball.jpg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { getData, } from '../../Hooks/DataFetching';
import moment from 'moment'



export const ViewJob = () => {

  // const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';

  const [jobData, setJobData] = useState({});
  const { jobID } = useParams();

  useEffect(() => {

    getData(
      `job/${jobID}/`, setJobData
    );
  }, []);

  console.log(jobData)


  return (
    <div className='job  w-full max-w-sm  m-auto'>
      <h1 className='text-xl font-bold'>{jobData.title}</h1>
      <h4>Created on: {moment(jobData.created).format('DD, MM, YYYY')}</h4>

      <div>
        <div>{jobData.member_zip}, {jobData.member_city}</div>
        <div>Category: {jobData.category_name}</div>
        <div>Urgency level: {jobData.urgency}</div>
        <div>Budget: {jobData.budget}</div>
      </div>


      <div className='carousel h-80'>

        {jobData.img_one ? (
          <div id="item1" className="w-full pt-20 m-auto carousel-item">
            <img src={jobData.img_one} className="w-auto" alt="#" />
          </div>) : null
        }

        {jobData.img_two ? (
          <div id="item2" className="w-full pt-20  m-auto carousel-item">
            <img src={jobData.img_two} className="w-auto" alt="#" />
          </div>) : null
        }

        {jobData.img_three ? (
          <div id="item3" className="w-full pt-20  m-auto carousel-item">
            <img src={jobData.img_three} className="w-full" alt="#" />
          </div>) : null
        }

        {jobData.img_four ? (
          <div id="item3" className="w-full pt-20  carousel-item">
            <img src={jobData.img_four} className="w-full" alt="#" />
          </div>) : null
        }

      </div>




      <p>
        Description: {jobData.description}
      </p>

      <br />

      <div className="lower-container flex-row justify-center">
        <p>Status</p>
        <div className="btn-group rounded overflow-hidden flex justify-center drop-shadow-2xl">
          <button className={`w-full font-semibold pt-1 pb-1
            ${jobData.status === 1 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
          }>
            Pending
          </button>
          <button className={`w-full font-semibold pt-1 pb-1
            ${jobData.status === 2 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
          }>
            Accepted
          </button>
          <button className={`w-full font-semibold pt-1 pb-1
            ${jobData.status == 3 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
          }>
            Completed
          </button>
        </div>
        <br />

        <div className="">
          <p>Assigned Helper</p>
          <div className="bg-indigo-900 text-amber-400 justify-center text-center rounded pt-1 pb-1 font-semibold">
            <p>{jobData.helper}</p>
          </div>
          <br />
          <div className="job-rating justify-between flex w-full flex-col">
            <div className="top flex flex-grow justify-center">
              <p className="w-full justify-center">Job Rating</p>
              <div className="flex h-3/6 w-3/6 justify-center ">
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
              </div>
            </div>
            <div className="bottom">
              <p>Available after completing</p>
            </div>
          </div>
          <br />
          <div className="user-rating justify-between flex w-full flex-col">
            <div className="top flex flex-grow justify-center">
              <p className="w-full justify-center">User Rating</p>
              <div className="flex h-3/6 w-3/6 justify-center ">
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
                <img
                  className="pr-1"
                  src={EmptyReviewBall}
                  alt="here should be the empty review ball"
                />
              </div>
            </div>
            <div className="bottom">
              <p>Available after completing</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
