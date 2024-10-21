import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '../interfaces/ApiResponse';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4300',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token or other headers here
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse, any>) => {
    // Handle successful responses
    if(response.data.success) {
      return response;
    } else {
      throw(response.data)
    }
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosInstance;