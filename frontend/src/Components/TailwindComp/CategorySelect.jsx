import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getData } from '../../Hooks/DataFetching';

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

  useEffect(() => {
    getData('category/list/', setCategories, setError);
  }, []);

  return (
    <>
      <Select
        className='category-filter'
        options={categoryOptions}
        name='category-filter'
        onChange={props.onChange}
        placeholder='Category...'
      />
    </>
  );
};
