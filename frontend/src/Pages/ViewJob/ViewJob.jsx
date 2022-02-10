import EmptyReviewBall from '../../Assets/icons/empty_review_ball.jpg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, } from '../../Hooks/DataFetching';
import moment from 'moment'

export const ViewJob = () => {

  const [jobData, setJobData] = useState({});
  const { jobID } = useParams();

  useEffect(() => {

    getData(
      `job/${jobID}/`, setJobData
    );
  }, []);

  console.log(jobData)

  const urgency = jobData.urgency;
  let urgencyText = '';
  let urgencyIcon = '';

  if (urgency === 1) {
    urgencyIcon = '\uD83D\uDC0C';
    urgencyText = "I can wait";
  }
  else if (urgency === 2) {
    urgencyIcon = '\uD83D\uDE4F'
    urgencyText = "Soon please";
  } else {
    urgencyIcon = '\u26A1'
    urgencyText = "Emergency!";
  }

  return (
    <div className='job  w-full max-w-sm  m-auto'>

      <h1 className='text-3xl font-bold'>{jobData.title}</h1>
      <h4 className='text-sm mb-4 mt-2'><strong>Created on:</strong> {moment(jobData.created).format('DD, MM, YYYY')}</h4>

      <div className='inline-block w-1/2 mb-2'><span className='mr-1'>&#128205;</span> {jobData.member_zip}, {jobData.member_city}</div>
      <div className='inline-block'><span className='mr-1'>&#x1F527;</span> {jobData.category_name}</div>

      <div className={`inline-block w-1/2  ${jobData.urgency === 3 ? 'text-red-600' : 'text-zinc-900'}`}>
        <span className='mr-1'>{urgencyIcon}</span> {urgencyText}</div>

      <div className='inline-block'><span className='mr-1'>&#128178;</span> {jobData.budget}</div>

      <div className='carousel h-64 bg-zinc-100 rounded-md mt-3 mb-3'>
        {jobData.img_one ? (
          <div id="item1" className="w-full h-full m-auto carousel-item">
            <img src={jobData.img_one} className="w-full object-cover" alt="#" />
          </div>) : null
        }

        {jobData.img_two ? (
          <div id="item2" className="w-full m-auto carousel-item">
            <img src={jobData.img_two} className="w-full" alt="#" />
          </div>) : null
        }

        {jobData.img_three ? (
          <div id="item3" className="w-full m-auto carousel-item">
            <img src={jobData.img_three} className="w-full " alt="#" />
          </div>) : null
        }

        {jobData.img_four ? (
          <div id="item3" className="w-full m-auto  carousel-item">
            <img src={jobData.img_four} className="w-full" alt="#" />
          </div>) : null
        }
      </div>

      <p className='mb-4'>{jobData.description}</p>


      <p><strong>Status</strong></p>
      <div className="btn-group rounded overflow-hidden drop-shadow-2xl mb-6">

        <button className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${jobData.status === 1 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
        }>
          Pending
        </button>

        <button className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${jobData.status === 2 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
        }>
          Accepted
        </button>

        <button className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${jobData.status === 3 ? 'bg-amber-400 text-indigo-900' : 'bg-white text-slate-400'}`
        }>
          Completed
        </button>
      </div>

      {/* Only show assigned helper if state is not pending */}
      {jobData.helper_status !== 1 ? (

        <div className="helper-info">
          <p><strong>Assigned Helper</strong></p>

          <div className="bg-indigo-900 text-amber-400 justify-center text-center rounded pt-1 pb-1 font-semibold mb-6">
            <p>{jobData.helper_username}</p>
          </div>

          <div className="job-rating justify-between flex w-full flex-col">
            <div className="top flex flex-grow justify-center">
              <p className="w-full justify-center font-bold">Helper Rating</p>
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
              <p className="w-full justify-center font-bold">User Rating</p>
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
      ) : null
      }
      {/* end helper info */}
    </div>

  );
};
