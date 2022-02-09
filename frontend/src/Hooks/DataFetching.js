import axios from 'axios';

localStorage.setItem(
  'token',
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0Nzc2NTA4LCJqdGkiOiI1N2JkNjVjNzM5N2E0MGM5OGRmMjQ0NDY2MmJjYzdjYiIsInVzZXJfaWQiOjN9.59HE1i4xglWAOxh8jay7G_tBKyUpTv8BSZbDU0NO-9A'
);
const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';
const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

export const getData = (urlEnding, stateToUpdate, errorState) => {
  axios
    .get(`${apiBaseURL}${urlEnding}`, config)
    .then((response) => {
      stateToUpdate(response.data);
      console.log(response.data.username);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const postData = (urlEnding, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }

  axios
    .post(`${apiBaseURL}${urlEnding}`, formData, config)
    .then((response) => console.log(response))
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const patchData = (urlEnding, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }
  axios
    .patch(`${apiBaseURL}${urlEnding}/`, formData, config)
    .then(() => {})
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const deleteData = (urlEnding, id, errorState) => {
  axios
    .delete(`${apiBaseURL}${urlEnding}${id}/`, config)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};
