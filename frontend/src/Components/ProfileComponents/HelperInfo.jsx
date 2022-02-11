import RobertoRodriguez from '../../Assets/placeholder/rodrigo-image.jpg';
import RatingBalls from '../../Assets/icons/Rating balls.svg';
import { useState } from 'react';
import { EditHelper } from './EditHelper';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getData } from '../../Hooks/DataFetching';

export const HelperInfo = (props) => {
  const [edit_helper, setEditHelper] = useState(false);
  const [helper_info, setHelperInfo] = useState(true);

  // console.log(props);

  const handleEditToggle = () => {
    if (edit_helper === false) {
      setEditHelper(true) && setHelperInfo(false);
    } else {
      setEditHelper(false) && setHelperInfo(true);
    }
  };

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  
  
  useEffect(() => {
    getData(`user/helper/${props.profileID}/`, setUser, setError)
  },
  []
  )
  
  return (
    <>
      <div className='upper_container'>
        <h1 className='text-4xl font-bold font-primary'>{user.username}</h1>
        <div className='flex space-x-24'>
          <h2 className='text-xl text-primary'>Last seen: {user.last_login}</h2>
          <img src={RatingBalls} alt='here should be the rating' />
        </div>
       


        <div className='quick_intro grid grid-cols-2 gap-3'>
          <img className='rounded-lg' src={user.profile_pic}/>
          <div>
            <p className='text-primary pb-2'>{user.zip}, {user.city}</p>
            <p className='text-primary'>{user.description}</p>
          </div>
        </div>

        {/* <div className='pt-3 pb-3 w-72'>
          <div className='languages w-1/2 flex justify-evenly'>
            <p>💬</p>
            <p>DE</p>
            <p>ENG</p>
            <p>IT</p>
          </div>
        </div> */}
      </div>

      <div className='middle_container pt-10 flex space-x-10 place-content-center justify-center'>
        {/* <button
          onClick={handleEditToggle}
          className='font-semibold rounded pl-4 pr-4 bg-secondary'>
          Edit Profile
        </button> */}

        {edit_helper === false && helper_info === true ? null : <EditHelper />}
        
        <h1 className={`pl-4 pr-4 rounded font-semibold border
            ${
              user.helper_verified
                ? 'bg-primary text-secondary border border-secondary'
                : 'bg-bg_light text-primary border-primary '
            }`}>{
              user.helper_verified
                ? 'Verified'
                : 'Unverified'
            }</h1> 

        <Link to='/job/private' className='flex justify-end'>
          <button className='border-2 border-black rounded-lg bg-orange-400'>
            send direct job-request
          </button>
        </Link>
      </div>

      <div className='lower_container pt-10'>
        <div className='border-b-4 border-secondary'>
          <h1>
            <b className='text-2xl'>Skills</b>
          </h1>
        </div>

        <div className='skills-card pt-5 pb-5'>
            {user.helper_categories?.map((category, i) => {
                return <div className='pb-3' key={i}>
                    <h1 className='uppercase text-l font-semibold'>{category.name}</h1>
                    {category.sub_categories.map((subcategory, i2) => {
                        return <h2 className='text-sm pb-4' key={i2}>{subcategory.name}</h2>
                      }
                    )}
                  </div>
                }
              )}
        </div>
      </div>
    </>
  );
};
