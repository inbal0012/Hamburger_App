import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hamburger-app-539b0.firebaseio.com/',
});

export default instance;
