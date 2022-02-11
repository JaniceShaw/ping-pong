import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getData } from '../../Hooks/DataFetching';
import './style.scss';

export const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const categoryOptions = [];

  categories
    .sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .map((category, i) => {
      const catName = Object.values(category)[1];
      const catID = Object.values(category)[0];
      const catObject = { value: catID, label: catName };
      return categoryOptions.push(catObject);
    });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0px',
      border: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'darkblue',
      opacity: '50%',
    }),

    option: (provided, state) => ({
      ...provided,
    }),
  };

  useEffect(() => {
    getData('category/list/', setCategories, setError);
  }, []);

  return (
    <>
      <div className='category-selector grid grid-cols-4'>
        <p className='flex items-center pl-4'>Category</p>
        <Select
          className='category-filter col-span-3'
          options={categoryOptions}
          name='category-filter'
          onChange={props.onChange}
          placeholder='Category...'
          isSearchable={false}
          styles={customStyles}
          value='General'
        />
      </div>
    </>
  );
};
