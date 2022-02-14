import axios from 'axios';

export const fetchJobsRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchJobsData = () => {
  return (dispatch) => {
    dispatch(fetchJobsRequest);
    axios
      .get('https://ping-pong.propulsion-learn.ch/backend/api/job/list/')
      .then((response) => {
        const users = response.data;
        console.log(users);
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};
