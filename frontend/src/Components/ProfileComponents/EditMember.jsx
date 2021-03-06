import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, patchData } from '../../Hooks/DataFetching';

export const EditMember = () => {
  const [user, setUser] = useState('');
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

  const [error, setError] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    getData('user/member/me/', setUser, setError);
    setUsername(user.username);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setPhone(user.phone);
    setStreet(user.street);
    setCity(user.city);
    setZip(user.zip);
    setDescription(user.description);
    setProfilePic(user.profile_pic);
    console.log(user.profile_pic);
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
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    patchData('user/member/me', form, setError);
    navigate('/member');
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
        {/* <img
          className='w-20'
          src={profile_pic}
          alt='here should be the profile pic'
        /> */}
        <input
          className='w-1/2 border-2 border-black'
          type='file'
          id='profile_pic'
          name={profile_pic}
          onChange={handleImageUpload}
        />
        <input
          className='w-1/2 border-2 border-black'
          type='text'
          placeholder='username'
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

        <input className='w-1/2 border-2 border-black' type='submit' />
      </form>
    </>
  );
};
