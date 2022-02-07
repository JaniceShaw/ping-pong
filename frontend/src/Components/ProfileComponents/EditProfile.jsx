import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputFile } from '../TailwindComp/InputFile';

export const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  let navigate = useNavigate();

  const handleSubmitButton = (event) => {
    event.preventDefault();
    navigate('/listing');
  };
  return (
    <>
      <form
        onSubmit={handleSubmitButton}
        className='flex flex-col items-center bg-slate-300 shadow-sm'>
        <InputFile />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder='FirstName'
          type='text'
          className='w-1/2 border-2 border-black'
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className='w-1/2 border-2 border-black'
          placeholder='LastName'
          type='text'
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='birthday'
          type='text'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <input className='w-1/2 border-2 border-black' type='submit' />
      </form>
    </>
  );
};
