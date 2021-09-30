import axios from 'axios';

const get = function(url) {
  return axios
    .get(url)
    .then((res) => successHandler(res))
    .catch((error) => errorHandler(error));
};

const successHandler = (response) => {
  const { data } = response;
  return data;
};

const errorHandler = (error) => {
  const { data } = error.response;
  return Promise.resolve(data);
};

export { get };
