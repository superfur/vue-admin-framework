import Axios from 'axios';

const request = Axios.create({
  baseURL: '/api',
  timeout: 5000,
});

request.interceptors.request.use((config: any) => {
  return config;
}, (error: any) => {
  console.error('error:', error);
  Promise.reject(error);
});

request.interceptors.response.use((response: any) => {
  return response;
}, (error: any) => {
  console.error('error:' + error);
  return Promise.reject(error);
});

export default request;
