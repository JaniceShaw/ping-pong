import { useState } from 'react';
import { SelectInput } from '../../Components/SelectInput.jsx/SelectInput';
import { InputFile } from '../../Components/TailwindComp/InputFile';
import { useNavigate } from 'react-router-dom';

export const NewJob = () => {
  const [title, setTitle] = useState('');
  const [hourly_rate, setHourlyRate] = useState('');
  const [max_reward, setMaxReward] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate();

  const handleSubmitButton = (event) => {
    event.preventDefault();
    navigate('/listing/helpers');
  };

  return (
    <>
      <h1>Create a New Job Request!</h1>
      <form
        className='flex flex-col justify-center items-center'
        onSubmit={handleSubmitButton}>
        <SelectInput />
        <input
          type='text'
          placeholder='Title'
          value={title}
          className='outline-none border-2 '
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='hourly rate'
          value={hourly_rate}
          className='outline-none border-2 '
          onChange={(e) => setHourlyRate(e.target.value)}
        />
        <input
          type='text'
          placeholder='max reward'
          value={max_reward}
          className='outline-none border-2 '
          onChange={(e) => setMaxReward(e.target.value)}
        />
        <SelectInput />
        <textarea
          value={description}
          className='border-2'
          cols='20'
          onChange={(e) => setDescription(e.target.value)}
          rows='5'></textarea>
        <InputFile />
        <InputFile />
        <InputFile />
        <input
          type='submit'
          value='submit changes'
          className='border-2 border-black cursor-pointer'
        />
      </form>
    </>
  );
};
