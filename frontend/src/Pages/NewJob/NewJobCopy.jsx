import { useState } from 'react';
import { Category } from '../../Components/TailwindComp/CategorySelect';
// import { InputFile } from '../../Components/TailwindComp/InputFile';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
// import axios from 'axios';

const UrgencyOptions = [
  { value: '1', label: 'I can wait' },
  { value: '2', label: 'Soon please' },
  { value: '3', label: 'Emergency!' },
];

export const NewJob = () => {
  const APIurlPrefix = 'https://ping-pong.propulsion-learn.ch/backend/api/';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [img_one, setImageOne] = useState('');
  const [img_two, setImageTwo] = useState('');
  const [img_three, setImageThree] = useState('');
  const [img_four, setImageFour] = useState('');

  // login errors
  const [error, setError] = useState('');

  let navigate = useNavigate();

  const handleSubmitButton = (event) => {
    event.preventDefault();
    const url = `${APIurlPrefix}job/request/`;
    const method = 'POST';
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('urgency', urgency);
    formData.append('budget', budget);
    formData.append('category', category);
    formData.append('img_one', img_one);
    formData.append('img_two', img_two);
    formData.append('img_three', img_three);
    formData.append('img_four', img_four);

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NzA0OTczLCJqdGkiOiJhMzE2ZDJkMDQ2ZDU0MWMyYmFlYTAxMGFjNWU4MDAxMSIsInVzZXJfaWQiOjF9.LRpbBVpsj4tk1ApggAlOAWuWjX0Sf1coZhNxzt5e2ps';

    const headers = new Headers({
      authorization: `Bearer ${token}`,
    });
    const config = {
      method: method,
      body: formData,
      headers: headers,
    };
    console.log('hello');
    fetch(url, config)
      .then((response) => {
        console.log('response', response.status);
        if (response.status === 201) {
          return response.status;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data === 201) {
          navigate('/listing/helpers');
        } else {
          setError(JSON.stringify(data).split('":["'));
          console.log('data', data);
        }
      })
      .catch((error) => {
        console.log('in error', error);
      });
  };

  const handleUrgencySelect = (event) => {
    console.log(event);
    const urgencyOptions = event.value;
    setUrgency(urgencyOptions);
  };

  const handleCategorySelect = (event) => {
    console.log(event);
    const categoryOptions = event.value;
    setCategory(categoryOptions);
  };

  const handleImageOne = (event) => {
    event.preventDefault();
    setImageOne(event.target.files[0]);
  };

  const handleImageTwo = (event) => {
    event.preventDefault();
    setImageTwo(event.target.files[0]);
  };

  const handleImageThree = (event) => {
    event.preventDefault();
    setImageThree(event.target.files[0]);
  };

  const handleImageFour = (event) => {
    event.preventDefault();
    setImageFour(event.target.files[0]);
  };

  return (
    <>
      <h1>Create a New Job Request!</h1>
      <form
        className='flex flex-col justify-center items-center'
        onSubmit={handleSubmitButton}>
        <input
          type='text'
          placeholder='Title..'
          value={title}
          className='outline-none border-2 '
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          className='border-2'
          cols='20'
          onChange={(e) => setDescription(e.target.value)}
          rows='5'></textarea>
        <Select
          className='urgency'
          options={UrgencyOptions}
          name='urgency'
          onChange={handleUrgencySelect}
        />
        <input
          type='text'
          placeholder='max reward'
          value={budget}
          className='outline-none border-2 '
          onChange={(e) => setBudget(e.target.value)}
        />
        <Category name='categoryOptions' onChange={handleCategorySelect} />

        <input type='file' name='file' onChange={handleImageOne} />
        <input type='file' name='file' onChange={handleImageTwo} />
        <input type='file' name='file' onChange={handleImageThree} />
        <input type='file' name='file' onChange={handleImageFour} />

        <input
          type='submit'
          value='submit changes'
          className='border-2 border-black cursor-pointer'
        />
      </form>
      <p>{error}</p>
    </>
  );
};
