import { useState } from 'react';
import { ListingFilter } from '../../Components/ListingFilter/ListingFilter';

export const FilterHeader = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilterVisibility = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className='filter-container relative -mx-4 w-screen z-10'>
      <button
        onClick={toggleFilterVisibility}
        className='relative font-normal border-b border-primary h-8  w-full bg-white flex justify-between items-center px-4 z-40'
      >
        <p>
          {props.filteredList.length}|{props.unfilteredList.length}{' '}
          {props.ListItemName}
        </p>
        <p className='flex'>
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className={`transition-transform scale-75 stroke-2 ${
              showFilter ? 'rotate-180' : ''
            }`}
          >
            <path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z' />
          </svg>
          Filter
        </p>
      </button>
      <ListingFilter
        unfilteredList={props.unfilteredList}
        filteredList={props.ReturningFunction}
        showFilter={showFilter}
      />
    </div>
  );
};
