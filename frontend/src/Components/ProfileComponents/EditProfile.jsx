import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, patchData } from '../../Hooks/DataFetching';
import { Category } from '../TailwindComp/CategorySelect';

export const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [profile_pic, setProfilePic] = useState('');
  const [description, setDescription] = useState('');
  const [helper_hourly_rate, setHourlyRate] = useState('');
  const [categories, setCategories] = useState('');
  const [helper_available, setAvailable] = useState('');
  const [helper_verified, setVerified] = useState('');

  const [error, setError] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    getData(
      'user/helper/me',
      (setUsername,
      setFirstName,
      setLastName,
      setEmail,
      setPhone,
      setStreet,
      setCity,
      setZip,
      setProfilePic,
      setDescription,
      setHourlyRate,
      setCategories,
      setAvailable,
      setVerified),
      setError
    );
  }, []);

  const form = {
    username: username,
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    street: street,
    city: city,
    zip: zip,
    profile_pic: profile_pic,
    description: description,
    helper_hourly_rate: helper_hourly_rate,
    categories: categories,
    helper_available: helper_available,
    helper_verified: helper_verified,
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    patchData('user/helper/me', form, setError);
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    setProfilePic(event.target.files[0]);
  };

  return (
    <>
      <form
        onSubmit={handleSubmitButton}
        className='flex flex-col items-center bg-slate-300 shadow-sm'>
        <input
          className='w-1/2 border-2 border-black'
          type='file'
          name={profile_pic}
          onChange={handleImageUpload}
        />
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
          placeholder='eMail'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Phone'
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Street'
          type='text'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='City'
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Zip'
          type='number'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <textarea
          className='w-1/2 border-2 border-black'
          placeholder='Description'
          name=''
          id=''
          cols='20'
          rows='3'
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Hourly Rate'
          type='text'
          value={helper_hourly_rate}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
        <Category />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='Availability'
          type='text'
          value={helper_available}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <input
          className='w-1/2 border-2 border-black'
          placeholder='verified'
          type='text'
          name={helper_verified}
          onChange={(e) => setVerified(e.target.value)}
        />
        <input className='w-1/2 border-2 border-black' type='submit' />
      </form>
    </>
  );
};
