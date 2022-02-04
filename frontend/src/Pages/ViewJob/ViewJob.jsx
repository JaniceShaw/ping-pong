import EmptyReviewBall from '../../assets/icons/empty_review_ball.jpg'

export const ViewJob = () => {
    return (
      <>
        <h1>Title of Job</h1>
        <h4>Creation date of Job</h4>
        <br/>
        <div>
            <div>ZIPCode</div>
            <div>Skill required</div>
            <div>Urgency level</div>
            <div>Salary per hour or total</div>
        </div>
    <br/>
        <div id='carousel'></div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eveniet, similique nulla suscipit praesentium facilis eligendi aliquid ...</p>

<br/>

<div className='lower-container flex-row justify-center'>
        <p>Status</p>
        <div className='btn-group rounded overflow-hidden flex justify-center drop-shadow-2xl'>
            <button className='bg-white text-slate-400 hover:bg-amber-400 hover:text-indigo-900 w-full font-semibold pt-1 pb-1'>Pending</button>
            <button className='bg-white text-slate-400 hover:bg-amber-400 hover:text-indigo-900 w-full font-semibold pt-1 pb-1'>Accepted</button>
            <button className='bg-white text-slate-400 hover:bg-amber-400 hover:text-indigo-900 w-full font-semibold pt-1 pb-1'>Completed</button>
        </div>
        <br/>
        
        <div className=''>
            <p>Assigned Helper</p>
            <div className='bg-indigo-900 text-amber-400 justify-center text-center rounded pt-1 pb-1 font-semibold'>
                <p>roberto_rodriguez</p>
            </div>
        <br/>
            <div className='job-rating justify-between flex w-full flex-col'>
                <div className='top flex flex-grow justify-center'>
                    <p className='w-full justify-center'>Job Rating</p>
                    <div className='flex h-3/6 w-3/6 justify-center '>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                    </div>
                </div>
                <div className='bottom'>
                    <p>Available after completing</p>
                </div>
            </div>
        <br/>
        <div className='user-rating justify-between flex w-full flex-col'>
                <div className='top flex flex-grow justify-center'>
                    <p className='w-full justify-center'>User Rating</p>
                    <div className='flex h-3/6 w-3/6 justify-center '>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
                        <img className='pr-1' src={EmptyReviewBall} alt='here should be the empty review ball'/>
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
  