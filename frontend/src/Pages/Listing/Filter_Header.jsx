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
          <span
            className={`plus-icon ${showFilter ? 'plus-icon-closed' : ''}`}
          ></span>
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
