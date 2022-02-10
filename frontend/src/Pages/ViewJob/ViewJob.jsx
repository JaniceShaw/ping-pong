import DefaultProfile from '../../Assets/placeholder/profile_placeholder.png';
import DefaultPost from '../../Assets/placeholder/job_placeholder.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, } from '../../Hooks/DataFetching';
import { Link } from 'react-router-dom';
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

  // urgency options //
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

  let helper_rating = 0;
  let member_rating = 0;

  if (jobData.helper_review) {
    helper_rating = jobData.helper_review.rating
  }

  if (jobData.member_review) {
    console.log('member review found');
    member_rating = jobData.member_review.rating
  }

  return (
    <div className='job  w-full max-w-sm  m-auto'>

      <h1 className='text-3xl font-bold'>{jobData.title}</h1>

      <div className="space-x-2 avatar-group mt-5 z-3">
        <div className="avatar">
          <div className="mb-4 rounded-full w-10 h-10">

            {jobData.member_profile_pic ? <img src={jobData.member_profile_pic} alt="profile pic" /> : <img src={DefaultProfile} alt="profile pic" />}

          </div>
        </div>
        <p className='mt-2'><Link to={`/member-profile/${jobData.member}`} className='bg-0 underline underline-offset-2 hover:no-underline'> {jobData.member_username}</Link> <span className='text-xs'>({moment(jobData.created).format('DD/MM/YYYY')})</span></p>
      </div>



      <div className='inline-block w-1/2 mb-2'><span className='mr-1'>&#128205;</span> {jobData.member_zip}, {jobData.member_city}</div>
      <div className='inline-block'><span className='mr-1'>&#x1F527;</span> {jobData.category_name}</div>

      <div className={`inline-block w-1/2  ${jobData.urgency === 3 ? 'text-red-600' : 'text-zinc-900'}`}>
        <span className='mr-1'>{urgencyIcon}</span> {urgencyText}</div>

      <div className='inline-block'><span className='mr-1'>&#128178;</span> {jobData.budget}</div>

      <div className='carousel h-64 bg-zinc-100 rounded-md mt-3 mb-3'>
        {jobData.img_one ? (
          <div id="item1" className="w-full h-full m-auto carousel-item">
            <img src={jobData.img_one} className="w-full object-cover" alt="#" />
          </div>) : <img src={DefaultPost} className="w-full object-cover" alt="#" />
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

          <div className="helper-rating mb-6">
            <p className="w-1/2 font-bold inline-block">Helper Rating</p>
            <div className='w-1/2 inline-block text-right'>
              <span className={helper_rating >= 1 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={helper_rating >= 2 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={helper_rating >= 3 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={helper_rating >= 4 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={helper_rating === 5 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
            </div>
            <div className="bottom">
              <p>Available after completing</p>
            </div>
          </div>

          <div className="member-rating">
            <p className="w-1/2 font-bold inline-block">Member Rating</p>
            <div className='w-1/2 inline-block text-right'>
              <span className={member_rating >= 1 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={member_rating >= 2 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={member_rating >= 3 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={member_rating >= 4 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
              <span className={member_rating === 5 ? 'rating-big-ball' : 'rating-big-gray-ball'}></span>
            </div>
            <div className="bottom">
              <p>Available after completing</p>
            </div>
          </div>

        </div>
      ) : null
      }
      {/* end helper info */}
      <Link to="/listing/jobs"><button className='btn mt-8'>Back to list</button></Link>
    </div>

  );
};
