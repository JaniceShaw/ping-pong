export const Rating = (props) => {
    return (
      <div className='Rating w-1/2 inline-block text-right'>
        <span className={props.rating >= 1 ? 'rating-big-ball' : 'rating-big-gray-ball'} />
        <span className={props.rating >= 2 ? 'rating-big-ball' : 'rating-big-gray-ball' } />
        <span className={props.rating >= 3 ? 'rating-big-ball' : 'rating-big-gray-ball'} />
        <span className={props.rating >= 4 ? 'rating-big-ball' : 'rating-big-gray-ball'} />
        <span className={props.rating === 5 ? 'rating-big-ball': 'rating-big-gray-ball'} />
      </div>
    );
  };
