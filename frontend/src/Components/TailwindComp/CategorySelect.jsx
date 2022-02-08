import { useEffect, useState } from 'react';
import Select from 'react-select';

export const Category = (props) => {
  const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = `${APIurlPrefix}category/list/`;
    const method = 'GET';

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NzA0OTczLCJqdGkiOiJhMzE2ZDJkMDQ2ZDU0MWMyYmFlYTAxMGFjNWU4MDAxMSIsInVzZXJfaWQiOjF9.LRpbBVpsj4tk1ApggAlOAWuWjX0Sf1coZhNxzt5e2ps"

    const headers = new Headers({
      authorization: `Bearer ${token}`,
    });

    const config = {
      method: method,
      headers: headers,
    };

    fetch(url, config)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setCategories(data);
      })

      .catch((error) => {
        console.log('in error', error);
      });
  }, []);

  const categoryOptions = [];

  categories.map((category, i) => {
    const catName = Object.values(category)[1];
    const catID = Object.values(category)[0];
    const catObject = { value: catID, label: catName };
    return categoryOptions.push(catObject);
  });

  return (
    <>
      <Select
        className='category-filter'
        options={categoryOptions}
        name='category-filter'
        onChange={props.onChange}
      />
    </>
  );
};
