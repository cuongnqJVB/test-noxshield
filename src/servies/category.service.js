import axiosClient from './axios-client';

export const categoryService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/home_category?${stringParams}`
        );
        return response;
    },
};
