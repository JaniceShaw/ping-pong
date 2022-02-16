import DefaultProfile from '../../Assets/placeholder/profile_placeholder.png';
import DefaultPost from '../../Assets/placeholder/job_placeholder.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, patchData, postData } from '../../Hooks/DataFetching';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Review } from './Review';
import { Rating } from './Rating';
import { RatingActive } from './RatingActive';

export const Job = () => {
  const [jobData, setJobData] = useState(false);
  const [errorState, setErrorState] = useState({});
  const [rate, setRate] = useState(0);
  const [userData, setUserData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('userData');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const { jobID } = useParams();

  useEffect(() => {
    getData(`job/${jobID}/`, setJobData, setErrorState);
  }, [setJobData, setErrorState]);

  const handelStatusChange = () => {
    if (jobData.status !== 3 && userData.type === 2) {
      const statusUpdate = { status: 2, helper_status: 2, helper: userData.id };
      patchData(`job/`, jobID, statusUpdate, setErrorState);
      setTimeout(() => {
        getData(`job/${jobID}/`, setJobData, setErrorState);
      }, 200);
    }
  };

  const handelStatusCompleteChange = (e) => {
    // change type to 1 after testing so only member can mark as complete
    if (jobData.status !== 1 && userData.type === 2) {
      const statusUpdate = { status: 3, helper_status: 3 };
      patchData(`job/`, jobID, statusUpdate, setErrorState);
      setTimeout(() => {
        getData(`job/${jobID}/`, setJobData, setErrorState);
      }, 200);
    }
  };

  const handelMemberReview = (event) => {
    event.preventDefault();
    const bodyObject = {
      text_content: event.target.text_content.value,
      rating: rate,
      member_request: jobData.id,
      member: jobData.member,
    };

    if (jobData.status === 3 && userData.id === jobData.helper) {
      postData(`job/review/member/`, bodyObject, setErrorState);
      setTimeout(() => {
        getData(`job/${jobID}/`, setJobData, setErrorState);
      }, 200);
    }
  };

  const handelHelperReview = (event) => {
    event.preventDefault();
    const bodyObject = {
      text_content: event.target.text_content.value,
      rating: rate,
      member_request: jobData.id,
      helper: jobData.helper,
    };

    if (jobData.status === 3 && userData.id === jobData.member) {
      postData(`job/review/helper/`, bodyObject, setErrorState);
      setTimeout(() => {
        getData(`job/${jobID}/`, setJobData, setErrorState);
      }, 200);
    }
  };

  const HandelBalls = (e) => {
    setRate(parseInt(e.target.dataset.rate));
  };

  // urgency options //
  const urgency = jobData.urgency;
  let urgencyText = '';
  let urgencyIcon = '';

  if (urgency === 1) {
    urgencyIcon = '\uD83D\uDC0C';
    urgencyText = 'I can wait';
  } else if (urgency === 2) {
    urgencyIcon = '\uD83D\uDE4F';
    urgencyText = 'Soon please';
  } else {
    urgencyIcon = '\u26A1';
    urgencyText = 'Emergency!';
  }

  let helper_rating = 0;
  let member_rating = 0;

  if (jobData.helper_review) {
    helper_rating = jobData.helper_review.rating;
  }
  if (jobData.member_review) {
    member_rating = jobData.member_review.rating;
  }

  return (
    <div className='job  w-full max-w-sm  m-auto'>
      {/*{!jobData ? <div>loading</div>: null}*/}
      <h1 className='text-3xl font-bold mt-6'>{jobData.title}</h1>

      <div className='space-x-2 avatar-group mt-5 z-3 mb-4'>
        <div className='avatar'>
          <div className='rounded-full w-10 h-10'>
            {jobData.member_profile_pic ? (
              <img src={jobData.member_profile_pic} alt='profile pic' />
            ) : (
              <img src={DefaultProfile} alt='profile pic' />
            )}
          </div>
        </div>
        <p className='mt-2'>
          <Link
            to={`/member/${jobData.member}`}
            className='bg-0 underline underline-offset-2 hover:no-underline'
          >
            {' '}
            {jobData.member_username}
          </Link>{' '}
          <span className='text-xs'>
            ({moment(jobData.created).format('DD/MM/YYYY')})
          </span>
        </p>
      </div>

      <div className='inline-block w-1/2 mb-2'>
        <span className='mr-1'>&#128205;</span> {jobData.member_zip},{' '}
        {jobData.member_city}
      </div>
      <div className='inline-block'>
        <span className='mr-1'>&#x1F527;</span> {jobData.category_name}
      </div>

      <div
        className={`inline-block w-1/2  ${
          jobData.urgency === 3 ? 'text-red-600' : 'text-zinc-900'
        }`}
      >
        <span className='mr-1'>{urgencyIcon}</span> {urgencyText}
      </div>

      <div className='inline-block'>
        <span className='mr-1'>&#128178;</span> {jobData.budget}
      </div>

      <div className='carousel h-64 bg-zinc-100 rounded-md mt-3 mb-3'>
        {jobData.img_one ? (
          <div id='item1' className='w-full h-full m-auto carousel-item'>
            <img
              src={jobData.img_one}
              className='w-full object-cover h-64'
              alt='#'
            />
          </div>
        ) : (
          <img src={DefaultPost} className='w-full object-cover h-64' alt='#' />
        )}

        {jobData.img_two ? (
          <div id='item2' className='w-full m-auto carousel-item'>
            <img
              src={jobData.img_two}
              className='w-full object-cover h-64'
              alt='#'
            />
          </div>
        ) : null}

        {jobData.img_three ? (
          <div id='item3' className='w-full m-auto carousel-item'>
            <img
              src={jobData.img_three}
              className='w-full object-cover h-64'
              alt='#'
            />
          </div>
        ) : null}

        {jobData.img_four ? (
          <div id='item3' className='w-full m-auto  carousel-item'>
            <img
              src={jobData.img_four}
              className='w-full object-cover h-64'
              alt='#'
            />
          </div>
        ) : null}
      </div>

      <p className='mb-4'>{jobData.description}</p>

      <p>
        <strong>Status</strong>
      </p>
      <div className='btn-group rounded overflow-hidden drop-shadow-2xl mb-6'>
        <button
          className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${
              jobData.status === 1
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
        >
          Pending
        </button>

        <button
          onClick={handelStatusChange}
          className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${
              jobData.status === 2
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
        >
          Accepted
        </button>

        <button
          onClick={handelStatusCompleteChange}
          className={`w-1/3 font-semibold pt-1 pb-1 inline-block
            ${
              jobData.status === 3
                ? 'bg-amber-400 text-indigo-900'
                : 'bg-white text-slate-400'
            }`}
        >
          Completed
        </button>
      </div>
      {jobData.helper_status === 1 ? (
        <p className='member-contact text-sm'>
          <strong>Contact: </strong>
          <a
            href={`mailto:${jobData.member_email}?subject=${jobData.title}`}
            className='underline underline-offset-2  hover:decoration-amber-400'
          >
            {' '}
            {jobData.member_username}
          </a>{' '}
          if you would like more information on this job.
        </p>
      ) : null}

      {/* Only show assigned helper if state is not pending */}
      {jobData.helper_status !== 1 ? (
        <div className='helper-info'>
          <p>
            <strong>Assigned Helper</strong>
          </p>
          <div className='space-x-2 avatar-group mt-1 z-3 mb-3'>
            <div className='avatar'>
              <div className='rounded-full w-10 h-10'>
                {jobData.helper_profile_pic ? (
                  <img src={jobData.helper_profile_pic} alt='profile pic' />
                ) : (
                  <img src={DefaultProfile} alt='profile pic' />
                )}
              </div>
            </div>

            <p className='bg-indigo-900 h-8 leading-6 text-amber-400 text-center rounded pt-1 pb-1 font-semibold w-full text-amber-400 mt-2'>
              {jobData.helper_username}
            </p>
          </div>
        </div>
      ) : null}

      {/* check that job is completed and display review form depending on type of user logged in or if a review already exits */}
      {jobData.status === 3 && userData.type === 2 && !jobData.member_review ? (
        <div className='member-rating mb-6 mt-5'>
          <p className='mb-3'>Please leave your member rating and review</p>
          <p className='w-1/2 font-bold inline-block mb-5'>Member Rating</p>
          <RatingActive rate={rate} HandelBalls={HandelBalls} />
          <Review
            type={1}
            userId={userData.id}
            rate={rate}
            handelSubmit={handelMemberReview}
          />
        </div>
      ) : null}

      {jobData.status === 3 && userData.type === 1 && !jobData.helper_review ? (
        <div className='helper-rating mb-6 mt-5'>
          <p className='mb-3'>Please leave your helper rating and review</p>
          <p className='w-1/2 font-bold inline-block mb-5'>Helper Rating</p>
          <RatingActive rate={rate} HandelBalls={HandelBalls} />
          <Review
            type={2}
            userId={userData.id}
            rate={rate}
            handelSubmit={handelHelperReview}
          />
        </div>
      ) : null}

      {/* member review shown if job not pending */}
      {jobData.helper_status !== 1 ? (
        <div>
          <div className='member-rating mb-6 mt-5'>
            <p className='w-1/2 font-bold inline-block'>Member Rating</p>
            <Rating rating={member_rating} />

            <div className='bottom'>
              <p>
                {jobData.member_review
                  ? jobData.member_review.text_content
                  : 'Available after completing'}
              </p>
            </div>
          </div>
          {/* Helper review shown if job not pending */}
          <div className='helper-rating mb-6 mt-5'>
            <p className='w-1/2 font-bold inline-block'>Helper Rating</p>
            <Rating rating={helper_rating} />

            <div className='bottom'>
              <p>
                {jobData.helper_review
                  ? jobData.helper_review.text_content
                  : 'Available after completing'}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <Link to='/listing/jobs'>
        <button className='btn mt-8'>Back to list</button>
      </Link>
    </div>
  );
};
