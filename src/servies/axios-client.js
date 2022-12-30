import axios, { addInterceptors } from './interceptor';

addInterceptors(axios);

const axiosClient = {
    get: (url, options) => {
        return axios.get(process.env.API_URI + url, { options });
    },

    /**
     * Request
     */
    post: (url, data, options) => {
        return axios.post(process.env.API_URI + url, data, { options });
    },

    /**
     * Request
     */
    put: (url, data, options) => {
        return axios.put(process.env.API_URI + url, data, { options });
    },

    /**
     * Request
     */
    delete: (url, options) => {
        return axios.delete(process.env.API_URI + url, { options });
    },
};

export default axiosClient;
