import axios from 'axios';
import URL from '../URL';
class UserAxiosInstance {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${URL}/`, // Replace with your API base URL
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.initializeInterceptors();
  }

  initializeInterceptors() {
    // Request interceptor to include the access token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('agentaccesstoken'); // Get the access token from local storage
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle token refresh
    this.axiosInstance.interceptors.response.use(
      (response) => response, // Pass through successful responses
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true; // Avoid infinite retry loop

          try {
            const refreshToken = localStorage.getItem('agentrefreshtoken'); // Get the refresh token from local storage
            if (!refreshToken) {
              throw new Error('No refresh token available.');
            }

            // Request a new access token using the refresh token
            const { data } = await axios.post(`${URL}/api/token/refresh/`, {
              refresh: refreshToken,
            });

            const newAccessToken = data.access; // Assuming the response contains a new access token
            localStorage.setItem('agentaccesstoken', newAccessToken); // Update local storage

            // Retry the original request with the new access token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return this.axiosInstance(originalRequest);
          } catch (refreshError) {
            // If refresh token fails, handle logout or redirection
            console.error('Token refresh failed:', refreshError);
            localStorage.removeItem('agentaccesstoken');
            localStorage.removeItem('agentrefreshtoken');
            // Optionally, redirect to login page or show an error
            window.location.href = '/signin'; // Replace with your login route
            
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  getInstance() {
    return this.axiosInstance;
  }
}

export default new UserAxiosInstance().getInstance();
