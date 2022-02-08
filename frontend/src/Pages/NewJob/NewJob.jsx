import { useState } from 'react';
import { Category } from '../../Components/TailwindComp/CategorySelect';
import Select from 'react-select';
import { postData } from '../../Hooks/DataFetching';
import { useNavigate } from 'react-router-dom';
const UrgencyOptions = [
  { value: '1', label: 'I can wait' },
  { value: '2', label: 'Soon please' },
  { value: '3', label: 'Emergency!' },
];

export const NewJob = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [img_one, setImageOne] = useState('');
  const [img_two, setImageTwo] = useState('');
  const [img_three, setImageThree] = useState('');
  const [img_four, setImageFour] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const form = {
    title: title,
    description: description,
    urgency: urgency,
    budget: budget,
    category: category,
    img_one: img_one,
    img_two: img_two,
    img_three: img_three,
    img_four: img_four,
  };

  const HandleSubmitButton = (event) => {
    event.preventDefault();
    postData('job/request/', form, setError);
    if (!error) {
      navigate('/listing/jobs');
    }
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

  return (
    <>
      <h1>Create a New Job Request!</h1>
      <form
        className='flex flex-col justify-center items-center'
        onSubmit={HandleSubmitButton}>
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

        <input
          type='file'
          name='img_one'
          onChange={(e) => setImageOne(e.target.files[0])}
        />

        <input
          type='file'
          name='img_two'
          onChange={(e) => setImageTwo(e.target.files[0])}
        />

        <input
          type='file'
          name='img_three'
          onChange={(e) => setImageThree(e.target.files[0])}
        />

        <input
          type='file'
          name='img_four'
          onChange={(e) => setImageFour(e.target.files[0])}
        />

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
