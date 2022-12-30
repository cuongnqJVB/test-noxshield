import axiosClient from './axios-client';

export const pageConfigService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/page_config?${stringParams}`
        );
        return response;
    },
};
