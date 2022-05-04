import axios from 'axios';

const $http = {
  Api: axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
  }),
};

export default $http;
