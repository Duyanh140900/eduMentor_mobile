import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

// Thiết lập URL cơ sở cho API
const BASE_URL = 'https://api.example.com'; // Thay đổi URL này theo endpoint API của bạn

// Tạo instance axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Interceptor cho request
apiClient.interceptors.request.use(
  config => {
    // Bạn có thể thêm token authentication vào đây
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Interceptor cho response
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Xử lý lỗi từ response
    if (error.response) {
      // Lỗi từ server với status code
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      // Không nhận được response từ server
      console.error('Error request:', error.request);
    } else {
      // Lỗi khi setting up request
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  },
);

// Các phương thức API
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient
      .get<T, AxiosResponse<T>>(url, config)
      .then(response => response.data);
  },
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return apiClient
      .post<T, AxiosResponse<T>>(url, data, config)
      .then(response => response.data);
  },
  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return apiClient
      .put<T, AxiosResponse<T>>(url, data, config)
      .then(response => response.data);
  },
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return apiClient
      .delete<T, AxiosResponse<T>>(url, config)
      .then(response => response.data);
  },
};

export default api;
