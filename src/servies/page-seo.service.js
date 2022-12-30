import axiosClient from './axios-client';

export const pageSeoService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/page_metadata?${stringParams}`
        );
        return response;
    },
};
