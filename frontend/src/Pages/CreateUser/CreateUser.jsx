import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectInput } from '../../Components/TailwindComp/SelectInput';

export const CreateUserPage = () => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [zipcode, setZipcode] = useState('');
  // const [user, setUser] = useState('');
  // // login errors
  // const [error, setError] = useState('');

  // for react router to change page
let navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleCreateUser = (event) => {
    event.preventDefault();
    // GetUserToken(email, password, setError);
    // GetUserData(setUser, setError);
  };

  // useEffect(() => {
  //   // dispatch(
  //   //   signInAction({
  //   //     user: user.first_name,
  //   //     user_id: user.id,
  //   //   })
  //   // );
  //   if (user.id) {
  //     navigate('/profile');
  //   }
  // }, []);

    const handleFirstNameInput = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameInput = (event) => {
        setLastName(event.target.value);
    };

    const handleZipcodeInput = (event) => {
        setZipcode(event.target.value);
    };

  return (
    <>
        <h1>Set up your User</h1>
        <br/>
        <div className="createUserForm">
          <form action="">
            <input
              className="field-input"
              type="text"
              placeholder="First name"
              value={ firstName }
              onChange={handleFirstNameInput}
            />
            <input
              className="field-input"
              type="text"
              placeholder="Last name"
              value={ lastName }
              onChange={handleLastNameInput}
            />
            <input
              className="field-input"
              type="text"
              placeholder="ZIP Code"
              value={ zipcode }
              onChange={handleZipcodeInput}
            />
            <p>Select your skill below</p>
            <SelectInput/>
            <input
              type="submit"
              className="field-submit"
              value="Save changes"
              onClick={handleCreateUser}
            />
          </form>
        </div>
    </>
  );
};
