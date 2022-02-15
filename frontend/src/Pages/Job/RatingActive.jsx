export const RatingActive = (props) => {
    console.log('rate', props.rate)

    return (
      <div className='Rating w-1/2 inline-block text-right'>
          <span
              className={props.rate >= 1 ? 'rating-big-ball cursor-pointer' : 'rating-big-gray-ball cursor-pointer'}
              data-rate={1}
              onClick={props.HandelBalls}
          />

          <span
              className={props.rate >= 2 ? 'rating-big-ball cursor-pointer' : 'rating-big-gray-ball cursor-pointer'}
              data-rate={2}
              onClick={props.HandelBalls}
          />
          <span
              className={props.rate >= 3 ? 'rating-big-ball cursor-pointer' : 'rating-big-gray-ball cursor-pointer'}
              data-rate={3}
              onClick={props.HandelBalls}
          />

          <span
              className={props.rate >= 4 ? 'rating-big-ball cursor-pointer' : 'rating-big-gray-ball cursor-pointer'}
              data-rate={4}
              onClick={props.HandelBalls}
          />

          <span
              className={props.rate === 5 ? 'rating-big-ball cursor-pointer': 'rating-big-gray-ball cursor-pointer'}
              data-rate={5}
              onClick={props.HandelBalls}
          />
      </div>
    );
  };
