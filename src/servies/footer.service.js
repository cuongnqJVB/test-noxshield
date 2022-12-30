import axiosClient from './axios-client';

export const footerService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/footer_config?${stringParams}`
        );
        return response;
    },
};
