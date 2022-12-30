import axios from 'axios';
import Cookies from './cookies';

export const addInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use(
        (config) => {

            if (!config.headers || !config.headers.Authorization) {
                const token = Cookies.get('token');
                if (token) {
                    config.headers.common.Authorization = `${token}`;
                    config.headers.Authorization = `${token}`;
                }
            }

            // if (process.browser) {
            //   console.log('AXIOS REQUEST', config.method, config.url);
            //   console.log('REQUEST PARAMS', config.params);
            //   console.log('REQUEST DATA', config.data);
            // }

            return config;
        },
        (error) => Promise.reject(error.response),
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            // if (process.browser && response && response.config) {
            //   console.log(
            //     'AXIOS RESPONSE',
            //     response.config.method,
            //     response.config.url
            //   );
            //   console.log(response.status, response.data);
            // }
            // Do something with response data
            if (response && response.data) {
                return response.data;
            }

            return response;
        },
        (error) => {
            if (error.config) {
                console.error('AXIOS ERROR', error.config, error.config.url);
                // error.response &&
                //   console.error(
                //     'AXIOS ERROR',
                //     error.response.status,
                //     error.response.data
                //   );
            } else {
                console.log('AXIOS CUSTOM ERROR', error);
            }
            return Promise.reject(error);
        },
    );
};

export default axios;
