import axiosClient from './axios-client';

export const partnerService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/home_partner?${stringParams}`
        );
        return response;
    },
};
