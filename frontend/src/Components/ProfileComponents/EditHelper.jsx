import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, patchData, } from '../../Hooks/DataFetching';
// import { Category } from '../TailwindComp/CategorySelectJob';


export const EditHelper = (props) => {
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
  const [helper_hourly_rate, setHourlyRate] = useState('');
  // const [categories, setCategories] = useState('');
  // const [helper_available, setAvailable] = useState('');

  const [error, setError] = useState(null);
   console.log('error', error?.status)

  let navigate = useNavigate();
   const HelperLink = () => {
    navigate('/listing/helpers');
  };

        if (error?.status === 200){
      console.log('hello yes it worked!')
      HelperLink();
  }

  if (!user) {
    getData('user/helper/me', setUser);
  }

    const form = {
    username: username,
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    street: street,
    city: city,
    zip: zip,
    description: description,
    helper_hourly_rate: helper_hourly_rate,
        // profile_pic: profile_pic,
    // categories: categories,
    // helper_available: helper_available,
  };
    // so that profile pic does not make an error if not changed
    if(profile_pic){
      form.profile_pic = profile_pic
  }
    console.log('form pic', form.profile_pic)

  useEffect(() => {

    setUsername(user.username);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setPhone(user.phone);
    setStreet(user.street);
    setCity(user.city);
    setZip(user.zip);
    setDescription(user.description);
    // setProfilePic(user.profile_pic);
    // setCategories(user.categories);
    // setAvailable(user.available);
  }, [user]);

  // console.log('profile pic', profile_pic);

  const handleSubmitButton = (event) => {
      console.log('hello submitted')
      event.preventDefault();
      patchData('user/helper/me', '', form, setError);

      // props.handleEditToggle()
      // HelperLink();
  };

  // const handleImageUpload = (event) => {
  //   event.preventDefault();
  //   setProfilePic(event.target.files[0]);
  // };


  return (
    <div className='EditHelper w-full mt-7 border-t-4 border-secondary pt-5'>
        <form onSubmit={handleSubmitButton} className=''>
            {/*<img className='w-20 rounded mb-3' src={profile_pic} alt='here should be the profile pic' />*/}

            <div className='pb-9 relative'>
                <input
                  className='field-input-login'
                  type='file'
                  name={profile_pic}
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
            </div>


             <div className='pb-9 relative'>
                 <input
                     className='field-input-login peer'
                     type='text'
                     value={username}
                     placeholder='username'
                     onChange={(e) => setUsername(e.target.value)}
                     id="username"
                    />
                 <label htmlFor='username' className='login-label'>Username</label>
             </div>

            <div className='pb-9 relative'>
                <input
                  placeholder='First Name'
                  type='text'
                  className='field-input-login peer'
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first_name"
                />
                <label htmlFor='first_name' className='login-label'>First name</label>
            </div>

             <div className='pb-9 relative'>
                <input
                    className='field-input-login peer'
                    placeholder='Last Name'
                    type='text'
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    id="last_name"
                />
                 <label htmlFor='last_name' className='login-label'>Last name</label>
             </div>

             <div className='pb-9 relative'>
                <input
                  className='field-input-login peer'
                  placeholder='Email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
                 <label htmlFor='email' className='login-label'>Email</label>
             </div>

            <div className='pb-9 relative'>
                <input
                  className='field-input-login peer'
                  placeholder='Phone'
                  type='tel'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                />
                <label htmlFor='phone' className='login-label'>Phone</label>
            </div>

            <div className='pb-9 relative'>
                <input
                   className='field-input-login peer'
                  placeholder='Street'
                  type='text'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                   id="street"
                />
                <label htmlFor='street' className='login-label'>Street</label>
            </div>

            <div className='pb-9 relative'>
                <input
                  className='field-input-login peer'
                  placeholder='City'
                  type='text'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                />
                <label htmlFor='city' className='login-label'>City</label>
            </div>

            <div className='pb-9 relative'>
                <input
                  className='field-input-login peer'
                  placeholder='Zip'
                  type='text'
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  id="zip"
                />
                <label htmlFor='zip' className='login-label'>Zip</label>
            </div>

            <div className='pb-7 relative'>
                <textarea
                  className='textarea-input peer'
                  placeholder='Description'
                  name=''
                  id='description'
                  cols='20'
                  rows='3'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <label htmlFor='description' className='textarea-label'>Description</label>
            </div>

            <div className='pb-9 relative'>
                <input
                  className='field-input-login peer'
                  placeholder='Hourly Rate'
                  type='text'
                  value={helper_hourly_rate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  id='hourly_rate'
                />
                <label htmlFor='hourly_rate' className='login-label'>Hourly rate</label>
            </div>

             {/*<div className='pb-9 relative'>*/}
             {/*    <input*/}
             {/*         className='field-input-login peer'*/}
             {/*         placeholder='Availability'*/}
             {/*         type='text'*/}
             {/*         value={helper_available}*/}
             {/*         onChange={(e) => setAvailable(e.target.value)}*/}
             {/*         id='availability'*/}
             {/*   />*/}
             {/*    <label htmlFor='availability' className='login-label'>Availability</label>*/}
             {/*</div>*/}

            {/*<Category />*/}

        <input className='btn' type='submit' />
      </form>
    </div>
  );
};
