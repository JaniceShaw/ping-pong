import axios from 'axios';

const apiBaseURL = 'https://ping-pong.propulsion-learn.ch/backend/api/';
let token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

const configVal = {
  headers: {
    'Content-type': 'application/json',
  },
};

export const getData = (urlEnding, stateToUpdate, errorState) => {
  axios
    .get(`${apiBaseURL}${urlEnding}`, token ? config : '')
    .then((response) => {
      stateToUpdate(response.data);
      // console.log(response.data);
    })
    .catch((err) => {
      errorState(err.response);
    });
};

export const postData = (urlEnding, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }

  axios
    .post(`${apiBaseURL}${urlEnding}`, formData, config)
    // .then((response) => console.log('hk', response))

    .then((response) => {
      console.log('posted!');
      errorState(response.status);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};

export const patchData = (urlEnding, id, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }
  axios
    .patch(`${apiBaseURL}${urlEnding}${id}/`, formData, config)
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

export const postLoginData = (urlEnding, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }

  axios
    .post(`${apiBaseURL}${urlEnding}`, formData, config)
    .then((response) => {
      errorState(response.status);
      localStorage.setItem('token', response.data.access);
      UserToLocalStorage(response.data.access);
    })
    .catch((err) => {
      errorState(err.response.data);
    });
};

function UserToLocalStorage(passedToken) {
  axios
    .get(`${apiBaseURL}user/me/`, {
      headers: {
        Authorization: 'Bearer ' + passedToken,
      },
    })
    .then((response) => {
      localStorage.setItem('userData', JSON.stringify(response.data));
    })
    .catch((err) => {});
}

export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
};

export const patchValData = (urlEnding, bodyObject, errorState) => {
  const formData = new FormData();

  for (let entry in bodyObject) {
    formData.append(entry, bodyObject[entry]);
  }
  axios
    .patch(`${apiBaseURL}${urlEnding}`, formData, configVal)
    .then((response) => {errorState(response.status)})
    .catch((err) => {
      errorState(err.response.data);
    });
};
