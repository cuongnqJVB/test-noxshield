import axiosClient from './axios-client';

export const appConfigService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/app_config?${stringParams}`
        );
        return response;
    },
};
