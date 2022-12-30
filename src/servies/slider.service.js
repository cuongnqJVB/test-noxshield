import axiosClient from './axios-client';

export const sliderService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/home_slider?${stringParams}`
        );
        return response;
    },
};
