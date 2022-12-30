import axiosClient from './axios-client';

export const productService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/home_product?${stringParams}`
        );
        return response;
    },
};
