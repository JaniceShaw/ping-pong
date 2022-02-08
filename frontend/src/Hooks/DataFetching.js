import axios from 'axios';

localStorage.setItem(
  'token',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0Njg5NTgyLCJqdGkiOiI0YjMzOWU2YWEzZTE0NDAzOGNlZWRlNDkzNjAwMzlkYSIsInVzZXJfaWQiOjR9.-XTRcalVZhHcupOq2nLojjWFfcXX7RpTqUhm3Gqbdac'
);
const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';
const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

export const getData = (urlEnding, stateToUpdate) => {
  axios
    .get(`${apiBaseURL}${urlEnding}`, config)
    .then((response) => {
      stateToUpdate(response.data);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const postData = (urlEnding, body, stateToUpdate) => {
  axios
    .post(`${apiBaseURL}${urlEnding}`, formData, config)
    .then((response) => console.log(response))
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const patchData = (urlEnding, id, body, stateToUpdate) => {
  axios
    .patch(`${apiBaseURL}${urlEnding}${id}/`, formData, config)
    .then(() => {})
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const deleteData = (urlEnding, id) => {
  axios
    .delete(`${apiBaseURL}${urlEnding}${id}/`, config)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};
