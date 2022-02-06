import { useState } from 'react';

export const SelectInput = () => {
  const [option, setOption] = useState('');
  let options = [
    { label: 'Mechanic', value: 'mechanic' },
    { label: 'Electrician', value: 'electrician'},
    { label: 'Developer', value: 'developer'},
    { label: 'Plumber', value: 'plumber' },
  ];
  return (
    <select
      onChange={(e) => setOption(e.target.value)}
      value={option}
      className='form-select appearance-none
      block
      w-1/2
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      aria-label='Default select example'>
      {options.map((option) => (
        <option value={option.value}>{option.value}</option>
      ))}
      {/* <option value='mechanic'>Mechanic</option>
      <option value='electrician'>Electrician</option>
      <option value='developer'>Developer</option> */}
    </select>
  );
};
